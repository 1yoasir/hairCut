<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajador extends Model
{
    use HasFactory;

    public function horarios(){
        return $this->belongsTo(Horario::class, 'horario_id');
    }
    
    public function users(){
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function citas(){
        return $this->hasOne(Cita::class, 'id');
    }

    protected $fillable = [
        'usuario_id',
        'horario_id',
        'nombre_trabajador'
    ];
    public $timestamps = false;
}
