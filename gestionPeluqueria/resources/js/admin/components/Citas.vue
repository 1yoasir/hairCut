<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Listado de Citas Totales</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Trabajador</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cita, index) in citas" :key="index">
                            <th scope="row">{{index+1}}</th>
                             <td>{{cita.name}}</td>
                            <td>{{cita.nombre_trabajador}}</td>
                            <td>{{cita.fecha}}</td>
                            <td>{{cita.hora}}</td>
                            <td>
                                <router-link :to="{name: 'detalles-cita', params:{id: cita.id}}"><i class="fa-solid fa-eye"></i></router-link>
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
            citas: [],
            cliente:[],
            trabajador:[]
        }
    },
    created() {
        axios.get('/citas')
        .then(respuesta => {
            this.citas = respuesta.data;
        });
    },
}
</script>