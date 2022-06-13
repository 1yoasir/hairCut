<template>
     <!-- INFORMACIÓN DE CADA SERVICIOS -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Listado de servicios
                        <button class="btn btn-success btn-sm derecha" @click="mostrarCrearServicio">Crear Servicio</button>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">precio</th>
                                    <th scope="col">Imagen</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(servicio, index) in servicios" :key="index">
                                    <td>{{servicio.nombre}}</td>
                                    <td>{{servicio.descripcion}}</td>
                                    <td>{{servicio.precio}}</td>
                                    <td><img :src="`/${servicio.imagen}`" alt=""></td>
                                    <td>
                                        <i class="fa-solid fa-trash-can text-danger" style="cursor: pointer" @click="eliminar(servicio)"></i>
                                        <router-link :to="{name: 'editar-servicio', params:{id: servicio.id}}"><i class="fa-solid fa-pencil"></i></router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12" v-if="crearServicio">
            <crear-servicio></crear-servicio>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servicios: [],
            crearServicio: false,
        }
    },
    created() {
        axios.get('/serviciosAll')
        .then(respuesta => {
            this.servicios = respuesta.data;
        });
        this.$root.$on('ocultarCrearServicio', (data) =>{
            this.crearServicio = data;
        });
    },
    methods: {
        mostrarCrearServicio(){
            this.crearServicio = true;
        },
        eliminar(servicio){
            axios.delete(`/servicio/${servicio.id}`)
            .then(respuesta => {
                console.log(respuesta.data)
                alert("eliminado correctamente")
                this.$router.go("/admin/servicios");
            })
        }
    },
}
</script>


<style scoped>
a:hover{
        color:#b59472
    }
.derecha{
        float: right;
    }
    img{
        height: 50px;
        width: 50px;
    }
</style>