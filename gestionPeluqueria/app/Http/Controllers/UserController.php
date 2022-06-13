<?php

namespace App\Http\Controllers;

use App\Models\Trabajador;
use App\Models\User;
use DateInterval;
use DatePeriod;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    protected function validator(array $request)
    {
        return Validator::make($request, [
           
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:3', 'confirmed'],
            'telephone' => ['required', 'numeric', 'regex:/[0-9]{9}/'],
            'role'=>['required', 'string', 'min:3', 'max:3']
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = User::all();

        return $usuarios;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function changeContrasenna(Request $request, $id){
        $usuario = User::find($id);
        $contrasennaNueva = Hash::make($request->contrasenna1);
        
        $usuario->password = $contrasennaNueva;

        $usuario->save();
        
        return "Actualizado correctamente";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new User();
        $usuario->name = $request->name;   
        $usuario->telephone = $request->telephone;   
        $usuario->role = $request->role;   
        $usuario->email = $request->email;   
        $usuario->password = Hash::make($request->password);
        $usuario->save();

        $trabajador = new Trabajador();
        $trabajador->usuario_id = $usuario->id;
        $trabajador->horario_id = $request->horario;
        $trabajador->nombre_trabajador =$request->name;
        $trabajador->save();

        return $usuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $usuario = User::find($id);
        return json_decode($usuario);
    }
    public function indexClientes(Request $request)
    {
        return User::where('role', 'CLI')->get();
    }
    public function indexTrabajadores(Request $request)
    {
       return User::join('trabajadors', 'trabajadors.usuario_id', '=', 'users.id')
                    ->select("users.id", "users.telephone", "users.name", "trabajadors.horario_id")->where('role', 'TRA')->get();
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateHorarioTrabajador(Request $request, $id)
    {
        $usuario = Trabajador::select("*")->where("usuario_id", $id)->get();
        $trabajador = Trabajador::find($usuario[0]['id']);
        $trabajador->horario_id = $request->horario;
        $trabajador->save();
        return "correcto";

    }

    public function update(Request $request, $id)
    {
        $usuario = User::find($id);
        if($request->hasFile('imagen')){
            $borrar = public_path() . '/' . $usuario->imgPerfil;
            if(@getimagesize($borrar)){
                unlink($borrar);
            }
            $archivo = $request->file('imagen');
            $destinoPath = 'images/perfiles/';
            $archivoNombre = time() . '-' . $archivo->getClientOriginalName();
            $subirImagen = $request->file('imagen')->move($destinoPath, $archivoNombre);

            $usuario->imgPerfil = $destinoPath . $archivoNombre;
            $usuario->telephone = $request->telephone;
            $usuario->name = $request->name;
            $usuario->email = $request->email;
            $usuario->save();
            return "Actualizado correctamente";
        } else{
            $usuario->telephone = $request->telephone;
            $usuario->name = $request->name;
            $usuario->email = $request->email;
            $usuario->save();
            return("Actualizado correctamente sin la foto");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = User::find($id);
        $usuario->delete();
    }

    public function horas($id)
    {
        $usuario = Trabajador::join('horarios', 'horarios.id', '=', 'trabajadors.horario_id')
        ->select("*")->where("usuario_id", $id)->get();
        $inicio = $usuario[0]['inicio'];
        $fin = $usuario[0]['fin'];
        $hora_inicio= new DateTime($inicio);
        $hora_fin= new DateTime($fin);
        $hora_fin->modify('+1 second');

        $intervalo = new DateInterval('PT30M');
        $periodo = new DatePeriod($hora_inicio, $intervalo, $hora_fin);
        foreach( $periodo as $hora ) {
            $horas[] =  $hora->format('H:i:s');
        };
        return $horas;
    }
}
