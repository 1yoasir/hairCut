<?php

use App\Http\Controllers\CitaController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\TrabajadorController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Auth::routes();

Route::middleware(['auth'])->group(function(){
    Route::prefix('cliente')->group(function(){
        Route::get('/', function () {
            return view('usuario');
        });
        Route::get('/citas', function () {
            return view('usuario');
        });
        Route::get('/citas/crear', function () {
            return view('usuario');
        });
        Route::get('/servicios', function () {
            return view('usuario');
        });
        Route::get('/editarperfil', function () {
            return view('usuario');
        });
    });
});

Route::middleware(['auth'])->group(function(){
    Route::prefix('trabajador')->group(function(){
        Route::get('/', function () {
            return view('usuario');
        });
        Route::get('/citas', function () {
            return view('usuario');
        });
        Route::get('/horario', function () {
            return view('usuario');
        });
        Route::get('/horario/editar', function () {
            return view('usuario');
        });
        Route::get('/editarperfil', function () {
            return view('usuario');
        });
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(CitaController::class)->group(function(){
        Route::get('/citas/cliente', 'indexCliente');
        Route::get('/citas/trabajador', 'indexTrabajador');
        Route::get('/cita/fecha/{fecha}/hora/{hora}/trabajador/{trabajador}', 'comprobar');
        Route::get('/citas/cliente/{id}', 'existenCitasSiguientesCliente');
        Route::get('/citas/trabajador/{id}', 'existenCitasSiguientesTrabajador');
        Route::post('/cita', 'store');
        Route::get('/citas/{id}', 'show');
        Route::get('/citas/usuarioCliente/{id}', 'citasUsuario');
        Route::get('/citas/usuarioTrabajador/{id}', 'citasTrabajador');
        Route::put('/citas/{id}', 'update');
        Route::delete('/cita/{id}', 'destroy');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(UserController::class)->group(function(){
        Route::put('/usuario/{id}/contrasenna', 'changeContrasenna');
        Route::put('/usuario/{id}', 'update');
        Route::get('/usuario/{id}', 'update');
        Route::delete('/usuario/{id}', 'destroy');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(ServicioController::class)->group(function(){
        Route::get('/serviciosAll', 'index');
        Route::get('/servicio/{name}', 'precioAndId');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(TrabajadorController::class)->group(function(){
        Route::get('/trabajadores', 'index');
        Route::get('/trabajador/{id}', 'show');
    });
});

?>