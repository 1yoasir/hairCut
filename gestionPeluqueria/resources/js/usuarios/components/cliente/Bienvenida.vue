<template>
        <div class="container">
            <div class="text-center">
                <h1 class="display-2 text-primary">Bienvenido a tu gestión de citas online</h1>
                <hr class="mt-3">
                <img src="/images/gestionCliente.jpg" alt="" class="img-fluid" > <br>
                <router-link :to="{name: 'citas-cliente'}" class="btn btn-outline-primary btn-lg mt-3 block">Comenzar</router-link>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>