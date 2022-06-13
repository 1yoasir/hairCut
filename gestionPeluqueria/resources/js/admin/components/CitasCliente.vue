<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Listado de Citas Totales de Cliente</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Trabajasdor</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cita, index) in citas" :key="index">
                            <th scope="row">1</th>
                            <td>{{cita.nombre}}</td>
                            <td>{{cita.fecha}}}</td>
                            <td>{{cita.hora}}</td>
                            <router-link :to="{name: 'detalles-cita', params:{id: cita.id}}"><i class="fa-solid fa-eye"></i></router-link>
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
            citas: []
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