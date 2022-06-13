<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServicioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $servicios = Servicio::all();

        return $servicios;
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
        $servicio = new Servicio();

        if($request->hasFile('imagen')){
            $archivo = $request->file('imagen');
            $destinoPath = 'images/servicios/';
            $archivoNombre = time() . '-' . $archivo->getClientOriginalName();
            $subirImagen = $request->file('imagen')->move($destinoPath, $archivoNombre);
            $servicio->imagen = $destinoPath . $archivoNombre;
        };

        $servicio->nombre = $request->nombre;
        $servicio->precio = $request->precio;
        $servicio->descripcion = $request->descripcion;
        $servicio->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $servicio = Servicio::find($id);
        return $servicio;
    }

    public function precioAndId($nombre)
    {
        $precio = Servicio::select("precio", "id")->where("nombre", $nombre)->get();
        return $precio;
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
    public function updateServicio(Request $request, $id)
    {
        $servicio = Servicio::find($id);
        if($request->hasFile('imagennueva')){
            $borrar = public_path() . '/' . $servicio->imagen;
            if(@getimagesize($borrar)){
                unlink($borrar);
            }
            $archivo = $request->file('imagennueva');
            $destinoPath = 'images/servicios/';
            $archivoNombre = time() . '-' . $archivo->getClientOriginalName();
            $subirImagen = $request->file('imagennueva')->move($destinoPath, $archivoNombre);
            $servicio->imagen = $destinoPath . $archivoNombre;
            $servicio->nombre = $request->nombre;
            $servicio->precio = $request->precio;
            $servicio->descripcion = $request->descripcion;
            $servicio->save();
            
        } else{
            $servicio->nombre = $request->nombre;
            $servicio->precio = $request->precio;
            $servicio->descripcion = $request->descripcion;
            $servicio->save();
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
        $servicio = Servicio::find($id);
        $servicio->delete();
    }
}
