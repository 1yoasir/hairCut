<template>
    <div class="container">
        <div class="text-center">
            <h1 class=" titulo display-2">Bienvenido a tu gestión de citas</h1>
            <hr class="mt-3">
            <img src="/images/gestionTrabajador.jpg" alt="" class="img-fluid"> <br>
            <router-link :to="{name: 'citas-trabajador'}" class="btn btn-outline-primary btn-lg mt-3 block">Comenzar</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
    
<style scoped>
.titulo{
        color: #b59472;
    }
    a:hover{
        background-color: #b59472;
    } 
    img{
        max-height: 700px;
    }
</style>