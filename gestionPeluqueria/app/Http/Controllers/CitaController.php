<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use Carbon\Carbon;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $citas = Cita::join("users", "users.id", "=", "citas.cliente_id" )
                        ->join("trabajadors", "trabajadors.usuario_id", "=", "citas.trabajador_id")
                        ->select("citas.id", "users.name", "trabajadors.nombre_trabajador", "citas.fecha", "citas.hora")->get();
        return $citas;
    }

    public function indexCliente()
    {

        
        $citas = Cita::join('users', 'users.id', "=", "citas.trabajador_id")
                        ->select("citas.id", "citas.cliente_id", "citas.fecha", "citas.hora", "citas.trabajador_id", "citas.precio", "users.name")->get();
        return $citas;
        
    }

    public function indexTrabajador()
    {
        
            $citas = Cita::join('users', 'users.id', "=", "citas.cliente_id")
                            ->select("citas.id", "citas.fecha", "citas.hora", "citas.trabajador_id", "citas.precio", "users.name")->get();
            return $citas;
        
    }

    public function citasUsuario($id){
        // join('trabajadors', 'trabajadors.usuario_id', "=", "citas.trabajador_id")
        // ->
        $citas = Cita::select("*")->where("cliente_id", $id)->get();
        return $citas;
    }

    public function citasTrabajador($id){
        // join('users', 'users.id', "=", "citas.cliente_id")
        // ->
        $citas = Cita::select("*")->where("trabajador_id", $id)->get();
        return $citas;
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cita = new Cita();
        $cita->cliente_id = $request->id_cliente;
        $cita->trabajador_id = $request->id_trabajador;
        $cita->servicio_id = $request->id_servicio;
        $cita->hora = $request->hora;
        $cita->fecha = $request->fecha;
        $cita->precio = $request->precio;
        $cita->nombre_trabajador = $request->nom_trabajador;
        $cita->nombre_cliente = $request->nom_cliente;
        $cita->comentario = $request->comentario;
        $cita->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $cita = Cita::join('users', 'users.id', "=", "citas.cliente_id")
        ->join('servicios', 'servicios.id', "=", "citas.servicio_id")
        ->join('trabajadors', 'trabajadors.usuario_id', "=", "citas.trabajador_id")
        ->select("*")->where("citas.id", $id)->get();
        return $cita;
    }

    public function comprobar($fecha, $hora, $trabajador)
    {
        $cita = Cita::select("*")->where("fecha", $fecha)->where("hora", $hora)->where("trabajador_id", $trabajador)->get();
        return $cita;
    }

    public function existenCitasSiguientesCliente($id)
    {
        $citas = Cita::join('trabajadors', 'trabajadors.usuario_id', "=", "citas.trabajador_id")
        ->select("citas.id", "citas.fecha", "citas.hora", "trabajadors.nombre_trabajador")->where("cliente_id", "=", $id)->where("fecha", ">=", Carbon::now())->get();
        return $citas;
    }

    public function existenCitasSiguientesTrabajador($id)
    {
        $citas = Cita::join('users', 'users.id', "=", "citas.cliente_id")
        ->select("citas.id", "citas.fecha", "citas.hora", "users.name")->where("trabajador_id", "=", $id)->where("fecha", ">=", Carbon::now())->get();
        return $citas;
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
    public function update(Request $request, $id)
    {
        $cita = Cita::findOrFail($request->id);

        $cita->cliente_id = $request->id_cliente;
        $cita->trabajador_id = $request->id_trabajador;
        $cita->servicio_id = $request->id_servicio;
        $cita->hora = $request->hora;
        $cita->fecha = $request->fecha;
        $cita->precio = $request->precio;
        $cita->save();

        return $cita;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $cita = Cita::destroy($request->id);

        return $cita;
    }
}
