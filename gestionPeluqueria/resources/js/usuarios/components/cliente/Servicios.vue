<template>
     <!-- INFORMACIÓN DE CADA SERVICIOS -->
        <div id="caracteristicas" class="container grid">
                <div class="text-center mb-5"  v-for="(servicio, index) in servicios" :key="index">
                        <!-- POSIBLE FALLO -->
                            <img class="icono" :src="`/${servicio.imagen}`" alt="silla-barbero">
            
                            <h4 class="mt-2">{{servicio.nombre}}</h4>
                            
                            <p class="textofeat">{{servicio.descripcion}}</p>
                        <router-link :to="{name: 'pedir-cita'}" class="btn btn-outline-primary btn-lg mt-3">Pedir Cita</router-link>
                </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            servicios: []
        }
    },
    created() {
        axios.get("/serviciosAll")
        .then(respuesta => {
            this.servicios = respuesta.data;
        });
    },
}
</script>

<style scoped>
img{
    height: 180px;
    width: 180px;    
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-column-gap: 200px;
    justify-content: center;
    align-content: center;
}

p{
    text-align: justify;
    width: 200px;
    height: 50px;
}
h4{
    color: #b59472;
}
a:hover{
    background: #b59472;;
}


</style>


