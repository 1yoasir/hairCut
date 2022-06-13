<template>
    <div class="container">
        <div class="card">
            <div class="card-header">Editar Horario</div>
            <form class="card-body" @submit.prevent="editar">
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
                <button type="submit" class="btn btn-outline-success mt-1 block col-md-2">Editar Horario</button>
                <a class="btn btn-outline-danger mt-1 block col-md-2">Cancelar</a>
            </form>
        </div>
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
            },
        }
    },
    created() {
        axios.get(`/horario/${this.$route.params.id}`)
        .then(respuesta => {
            this.horario = respuesta.data;
        });
    },
    methods: {
        editar(){
            axios.put("/horario/" +this.horario.id, this.horario)
            .then(respuesta => {
                console.log(respuesta.data);
                alert("editado correctamente");
            });
        window.location.replace("http://127.0.0.1:8000/admin/horarios")
        }
    },
}
</script>
