<template>
<div class="container card">
    <h1 class="display-5 card-header">Detalles del trabajador</h1>
    <form class="card-body">
        <div class="row">
            <div class="form-group col-md-6">
                <label for="inputCliente">TRABAJADOR</label>
                <input type="email" class="form-control" id="name" placeholder="Nombre" disabled v-model="trabajador.name">
            </div>
            <div class="form-group col-md-6">
                <label for="inputTrabajador">ID</label>
                <input type="text" class="form-control" id="id" placeholder="id" disabled v-model="trabajador.id">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label for="inputCliente">EMAIL</label>
                <input type="email" class="form-control" id="email" placeholder="Email" disabled v-model="trabajador.email">
            </div>
            <div class="form-group col-md-3">
                <label for="inputTrabajador">TELEFONO</label>
                <input type="text" class="form-control" id="telephone" placeholder="Trabajador" disabled v-model="trabajador.telephone">
            </div>
        
        
            <div class="form-group col-md-3">
                <label for="inputFecha">CREACIÓN</label>
                <input type="text" class="form-control" id="creado" disabled v-model="trabajador.created_at">
            </div>
            
        </div>
        <a class="btn btn-outline-primary btn-lg mt-3 block col-xl-12" @click="anterior">Volver a Mis trabajadores</a>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            trabajador: {
                name: '',
                id: '',
                telephone: '',
                email: '',
                created_at: '',
            }
        }
    },
    created() {
        axios.get(`/usuario/${this.$route.params.id}`)
            .then(response => {
                this.trabajador = response.data;
            })
    },

    methods: {
        anterior(){
            this.$router.go(-1);
        }
    },
    
}
</script>

<style scoped>
</style>