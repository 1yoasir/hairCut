<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mb-5">
            <div class="card">
                <div class="card-header">Listado de Horarios
                    <button class="btn btn-success btn-sm derecha" @click="mostrarDiv">Crear Horario</button>
                </div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">INICIO</th>
                                <th scope="col">FIN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(horario, index) in horarios" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{horario.inicio}}</td>
                                <td>{{horario.fin}}</td>
                                <td class="list">
                                    <i class="fa-solid fa-trash-can text-danger" style="cursor:pointer" @click="eliminar(horario.id)"></i>
                                    <router-link :to="{name: 'editarHorario', params:{id: horario.id}}"><i class="fa-solid fa-pencil text-warning"></i></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-12" v-if="crearHorario">
            <crear></crear>
        </div>
    </div>
</div>
</template>

<script>
import crear from '../components/CrearHorario.vue';
export default {
    data() {
        return {
            horarios: [],
            crearHorario: false,
        }
    },
    components: {crear},
    created(){
        axios.get("/horarios")
        .then(respesta => {
            this.horarios = respesta.data;
        });
        this.$root.$on('ocultarCrearHorario', (data) =>{
            this.crearHorario = data;
        });
    },
    methods: {
        mostrarDiv(){
            this.crearHorario = true;
        },
        eliminar(id){
            axios.delete("/horario/" + id)
            .then(respuesta => {
                alert("Has borrado correctamente el horario")
            });
        window.location.replace("http://127.0.0.1:8000/admin/horarios")
        }
    },
    
}
</script>

<style scoped>
.derecha{
        float: right;
    }
</style>