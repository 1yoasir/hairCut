<template>
    <div class="container">
        <router-link :to="{name: 'pedir-cita'}" class="btn btn-outline-dark btn-lg mb-3 pedir">Pedir Cita</router-link>


        <div class="row justify-content-center mb-4 sombra" v-if="citasPendientes">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header display-5 bg-success text-white">Recordatorio de cita</div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="th">Día</th>
                                    <th scope="col" class="th">Trabajador</th>
                                    <th scope="col" class="th">hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cita, index) in citasNuevas" :key="index">
                                    <td>{{cita.fecha}}</td>
                                    <td>{{cita.nombre_trabajador}}</td>
                                    <td>{{cita.hora}}</td>
                                    <td class="list">
                                        <router-link :to="{name: 'ver-cita', params:{id: cita.id}}"><i class="fa-solid fa-eye"></i></router-link>
                                        <i class="fa-solid fa-trash-can trash" @click="eliminar(cita.id)"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="sombra mb-5" style="height: 100px">
            <h1 class="text-center">No tiene ninguna cita <br><strong>pide una 😉</strong></h1>
        </div>


        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header display-5 bg-grises" id="titulo">Tus citas anteriores</div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="th">Día</th>
                                    <th scope="col" class="th">Trabajador</th>
                                    <th scope="col" class="th">hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cita, index) in citasAntiguas" :key="index">
                                    <td>{{cita.fecha}}</td>
                                    <td>{{cita.nombre_trabajador}}</td>
                                    <td>{{cita.hora}}</td>
                                    <td class="list">
                                        <router-link :to="{name: 'ver-cita', params:{id: cita.id}}"><i class="fa-solid fa-eye"></i></router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            citasAntiguas: [],
            citasNuevas: [],
            id: '',
            citasPendientes: true,
        }
    },
    created() {
        axios.get(`/citas/usuarioCliente/${this.user.id}`)
        .then(respuesta => {
            this.citasAntiguas = respuesta.data;
        });
        axios.get(`/citas/cliente/${this.user.id}`)
        .then(respuesta => {
            this.citasNuevas = respuesta.data;
             if(Object.keys(respuesta.data).length === 0){
                this.citasPendientes = false
             } else{
                this.citasPendientes = true;
             }
        });
    },
    methods: {
        eliminar(id){
            axios.delete("/cita/" + id)
            .then(respuesta=> {
                console.log(respuesta.data);
                alert("Has eliminado la cita");
                this.$router.go("/cliente/citas")
            });
            // window.location.replace("http://127.0.0.1:8000/cliente/citas");
        }
    },
}
</script>

<style scoped>
    #titulo{
        color: #b59472;
    }
    .th{
        color:#b59472
    }
    a:hover{
        color:#b59472
    }
    .pedir{
        
    }
    .pedir:hover{
        color: white;
        background: #b59472;
    }
    .trash:hover{
        color: darkred;
    }
    .sombra{
        box-shadow:
            5.9px 3.9px 14.9px rgba(0, 0, 0, 0.02),
            20px 13.1px 29.8px rgba(0, 0, 0, 0.028),
            60.2px 39.6px 44.3px rgba(0, 0, 0, 0.035),
            111.7px 73.5px 57.4px rgba(0, 0, 0, 0.042),
            136.9px 90px 69px rgba(0, 0, 0, 0.05),
            152px 100px 80px rgba(0, 0, 0, 0.07)
            ;
    }
</style>