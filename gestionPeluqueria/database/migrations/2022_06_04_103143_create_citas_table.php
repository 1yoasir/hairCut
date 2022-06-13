<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->id(); 
            $table->foreignId('cliente_id')
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('trabajador_id')
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('servicio_id')
                ->constrained('servicios');
            $table->string('nombre_trabajador');
            $table->string('nombre_cliente');
            $table->time('hora');
            $table->date('fecha');
            $table->double('precio');
            $table->timestamp('created_at');
            $table->string('comentario')
                ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
};
