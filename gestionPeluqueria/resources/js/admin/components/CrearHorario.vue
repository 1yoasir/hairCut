<template>
    <div class="card">
        <div class="card-header">Crear Horario</div>
        <form class="card-body" @submit.prevent="crear">
            <input type="hidden" id="role" value="TRA" v-model="horario.id">
            <div class="row mb-3">
                <div class="form-group col-md-6 mb-3">
                    <label for="inicio">Hora de inicio</label>
                    <input type="text" class="form-control" id="inicio" placeholder="Inicio" v-model="horario.inicio">
                </div>
                <div class="form-group col-md-6">
                    <label for="fin">Hora de fin</label>
                    <input type="text" class="form-control" id="email" placeholder="Fin" v-model="horario.fin">
                </div>
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mt-3 block col-xl-12">Crear Horario</button>
            <a class="btn btn-outline-danger btn-lg mt-3 block col-xl-12" @click="cancelar()">Cancelar</a>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            horario: {
                id: '',
                inicio: '',
                fin: ''
            }
        }
    },
    methods: {
        cancelar(){
            this.$root.$emit('ocultarCrearHorario', false);
        },
        crear(){
            axios.post("/horarios", this.horario)
            .then(respuesta => {
                console.log(respuesta.data);
                alert("Has creado un horario correctamente")
            });
            window.location.replace("http://127.0.0.1:8000/admin/horarios")
        }
    },
}
</script>