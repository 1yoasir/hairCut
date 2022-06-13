<?php

use App\Http\Controllers\CitaController;
use App\Http\Controllers\HorarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware(['auth'])->group(function(){
//     Route::controller(CitaController::class)->group(function(){
//         Route::get('/citas', 'index');
//         Route::get('/citas/cliente', 'indexCliente');
//         Route::get('/citas/trabajador', 'indexTrabajador');
//         Route::post('/citas', 'store');
//         Route::put('/citas/{id}', 'update');
//         Route::delete('/citas/{id}', 'destroy');
//     });
// });

// Route::middleware(['auth'])->group(function(){
//     Route::controller(HorarioController::class)->group(function(){
//         Route::get('/horarios', 'index');
//         Route::post('/horarios', 'store');
//         Route::put('/horarios/{id}', 'update');
//         Route::delete('/horarios/{id}', 'destroy');
//     });
// });
