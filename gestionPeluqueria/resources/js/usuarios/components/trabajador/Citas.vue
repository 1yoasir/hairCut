<template>
    <div class="container">

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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="sombra mb-5" style="height: 100px">
            <h1 class="text-center">No tiene ninguna cita pendiente<br><strong>¡Fiesta! 🥳</strong></h1>
        </div>


        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header display-5 fondo" id="titulo">Listado de tus citas</div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="th">Día</th>
                                    <th scope="col" class="th">Cliente</th>
                                    <th scope="col" class="th">hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cita, index) in citasAntiguas" :key="index">
                                    <td>{{cita.fecha}}</td>
                                    <td>{{cita.nombre_cliente}}</td>
                                    <td>{{cita.hora}}</td>
                                    <td class="list">
                                        <router-link :to="{name: 'ver-citaT', params:{id: cita.id}}"><i class="fa-solid fa-eye"></i></router-link>
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
import Horario from './Horario.vue';
export default {
  components: { Horario },
    data() {
        return {
            citasAntiguas: [],
            citasNuevas: [],
            citasPendientes: true,
        }
    },
    created() {
        axios.get(`/citas/usuarioTrabajador/${this.user.id}`)
        .then(respuesta => {
            this.citasAntiguas = respuesta.data;
        });

        axios.get(`/citas/trabajador/${this.user.id}`)
        .then(respuesta => {
            this.citasNuevas = respuesta.data;
             if(Object.keys(respuesta.data).length === 0){
                this.citasPendientes = false
             } else{
                this.citasPendientes = true;
             }
        });
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
    a{
        color: black;
    }
    a:hover{
        color:#b59472
    }
    .fondo{
        background: black;
    }

    img{
        height: 50px;
        width: 50px;

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