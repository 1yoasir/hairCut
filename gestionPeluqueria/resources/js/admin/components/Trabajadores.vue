<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 mb-5">
            <div class="card">
                <div class="card-header">Listado Trabajadores
                    <button class="btn btn-success btn-sm derecha" @click="mostrarCrearTrabajador">Crear Trabajador</button>
                </div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Horario</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(trabajador, index) in trabajadores" :key="index">
                                <td>{{trabajador.name}}</td>
                                <td>{{trabajador.telephone}}</td>
                                <td>{{trabajador.horario_id}}</td>
                                <td class="list">
                                    <i class="fa-solid fa-trash-can text-danger" style="cursor:pointer" @click="eliminar(trabajador.id)"></i>
                                    <router-link :to="{name: 'editarHorarioTrabajador', params:{id: trabajador.id}}"><i class="fa-solid fa-pencil text-warning"></i></router-link>
                                    <router-link :to="{name: 'ver-trabajador', params:{id: trabajador.id}}"><i class="fa-solid fa-eye"></i></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-md-12" v-if="crearTrabajador">
            <crear-trabajador></crear-trabajador>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            trabajadores: [],
            crearTrabajador: false,
        }
    },
    created() {
        axios.get('/usuarios/trabajadores')
        .then(respuesta => {
            this.trabajadores = respuesta.data;
        });
        this.$root.$on('ocultarCrear', (data) =>{
            this.crearTrabajador = data;
        })
    },
    methods: {
        mostrarCrearTrabajador(){
            this.crearTrabajador = true;
        },
        eliminar(id){
            axios.delete(`/usuario/${id}`)
            .then(respuesta =>{
                alert("Has borrado correctamente al trabajador");
                window.location.replace("http://127.0.0.1:8000/admin/trabajadores");
            })
        }
    },
}
</script>

<style scoped>
    .derecha{
        float: right;
    }
</style>