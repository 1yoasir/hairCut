<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    public function trabajadors(){
        return $this->belongsTo(Trabajador::class, 'trabajador_id');
    }

    public function clientes(){
        return $this->belongsTo(Cliente::class, 'cliente_id');
    }

    public function servicios(){
        return $this->belongsTo(Servicio::class, 'servicio_id');
    }

    protected $fillable = [
        'trabajador_id',
        'servicio_id',
        'hora',
        'fecha',
        'precio',
        'cliente_id'
    ];
    const UPDATED_AT = null;
}
