<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    use HasFactory;

    public function trabajadors(){
        return $this->hasMany(Trabajador::class, 'id');
    }

    protected $fillable = [
        'inicio',
        'fin'
    ];
}
