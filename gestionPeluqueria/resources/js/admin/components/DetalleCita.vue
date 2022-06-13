<template>
<div class="container card">
    <h1 class="display-5 card-header">Detalles de la cita</h1>
    <form class="card-body" v-for="(cita, index) in citas" :key="index">
        <div class="row">
            <div class="form-group col-md-6">
                <label for="cliente">CLIENTE</label>
                <input type="text" class="form-control" id="cliente" disabled v-model="cita.name">
            </div>
            <div class="form-group col-md-6">
                <label for="trabajador">TRABAJADOR</label>
                <input type="text" class="form-control" id="trabajador" placeholder="Trabajador" disabled v-model="cita.trabajador_id">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label for="servicio">SERVICIOS</label>
                <input type="text" class="form-control" id="servicio" placeholder="Email" disabled v-model="cita.nombre">
            </div>
            <div class="form-group col-md-3">
                <label for="precio">PRECIO</label>
                <input type="text" class="form-control" id="precio" placeholder="Trabajador" disabled v-model="cita.precio">
            </div>
        
        
            <div class="form-group col-md-3">
                <label for="inputFecha">FECHA</label>
                <input type="text" class="form-control" id="inputFecha" disabled v-model="cita.fecha">
            </div>
            <div class="form-group col-md-3">
                <label for="inputHora">HORA</label>
                <input type="text" class="form-control" id="inputHora" disabled v-model="cita.hora">
            </div>
        </div>
        <router-link :to="{name: 'citas-trabajador'}" class="btn btn-outline-primary btn-lg mt-3 block col-xl-12">Volver a Mis citas</router-link>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            citas: []
        }
    },
    mounted() {
        this.mostrarCita()
    },
    methods: {
        mostrarCita(){
            axios.get(`/citas/${this.$route.params.id}`)
            .then(response => {
                this.citas = response.data;
                alert(response.data)
            })
        }
    },
}
</script>

<style scoped>
a:hover{
        background-color: #b59472;
    }
</style>