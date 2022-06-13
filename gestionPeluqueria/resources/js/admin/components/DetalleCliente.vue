<template>
<div class="container card">
    <h1 class="display-5 card-header">Detalles del cliente</h1>
    <form class="card-body">
        <div class="row">
            <div class="form-group col-md-6">
                <label for="inputCliente">NOMBRE</label>
                <input type="email" class="form-control" id="name" placeholder="Nombre" disabled v-model="cliente.name">
            </div>
            <div class="form-group col-md-6">
                <label for="inputTrabajador">ID</label>
                <input type="text" class="form-control" id="id" placeholder="id" disabled v-model="cliente.id">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3">
                <label for="inputCliente">EMAIL</label>
                <input type="email" class="form-control" id="email" placeholder="Email" disabled v-model="cliente.email">
            </div>
            <div class="form-group col-md-3">
                <label for="inputTrabajador">TELEFONO</label>
                <input type="text" class="form-control" id="telephone" placeholder="Trabajador" disabled v-model="cliente.telephone">
            </div>
        
        
            <div class="form-group col-md-3">
                <label for="inputFecha">CREACIÓN</label>
                <input type="text" class="form-control" id="creado" disabled v-model="cliente.created_at">
            </div>
            
        </div>
        <a class="btn btn-outline-primary btn-lg mt-3 block col-xl-12" @click="anterior">Volver a Mis clientes</a>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            cliente: {

            }
        }
    },
    mounted() {
        this.mostrarCliente()
    },

    methods: {
        mostrarCliente(){
            axios.get(`/usuario/${this.$route.params.id}`)
            .then(response => {
                this.cliente = response.data;
            })
        },
        anterior(){
            this.$router.go(-1);
        }
    },
    
}
</script>

<style scoped>
</style>