<?php

use App\Http\Controllers\CitaController;
use App\Http\Controllers\HorarioController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::middleware(['auth'])->group(function(){
    Route::prefix('admin')->group(function(){
        Route::get('/', function () {
            return view('admin');
        });
        Route::get('/clientes', function () {
            return view('admin');
        });
        Route::get('/trabajadores', function () {
            return view('admin');
        });
        Route::get('/citas', function () {
            return view('admin');
        });
        Route::get('/servicios', function () {
            return view('admin');
        });
        Route::get('/horarios', function () {
            return view('admin');
        });
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(CitaController::class)->group(function(){
        Route::get('/citas', 'index');
        Route::post('/citas', 'store');
        Route::put('/citas/{id}', 'update');
        Route::delete('/citas/{id}', 'destroy');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(UserController::class)->group(function(){
        Route::get('/usuarios', 'index');
        Route::get('/usuarios/clientes', 'indexClientes');
        Route::get('/usuarios/trabajadores', 'indexTrabajadores');
        Route::get('/usuarios/trabajador/{id}/horas', 'horas');
        Route::get('/usuario/{id}', 'show');
        Route::post('/usuario', 'store');
        Route::put('/usuario/trabajador/{id}', 'updateHorarioTrabajador');
        Route::delete('/usuario/{id}', 'destroy');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(HorarioController::class)->group(function(){
        Route::get('/horarios', 'index');
        Route::post('/horarios', 'store');
        Route::get('/horario/{id}', 'show');
        Route::put('/horario/{id}', 'update');
        Route::delete('/horario/{id}', 'destroy');
    });
});

Route::middleware(['auth'])->group(function(){
    Route::controller(ServicioController::class)->group(function(){
        Route::get('/serviciosAll', 'index');
        Route::post('/servicio', 'store');
        Route::get('/servicio/id/{id}', 'show');
        Route::put('/servicioac/{id}', 'updateServicio');
        Route::delete('/servicio/{id}', 'destroy');
    });
});
?>