<template>
    <div class="text-center grid">
        <div class=" text-center elemento">
            <strong class="">¿Quieres cambiar la contraseña?</strong><br>
            <router-link :to="{name: 'CambiarContraseña'}" class="btn btn-primary col-sm-3 mt-3 mb-3">Cambiar</router-link>
        </div>
        <div class=" text-center elemento margenizqui">
           <strong>¿Quieres cambiar tus datos personales?</strong><br>
           <router-link :to="{name: 'EditarDatos'}" class="btn btn-primary col-sm-3 mt-3 mb-3">Cambiar</router-link>
        </div>
        <div class=" text-center elemento margenizqui">
           <strong>¿Quieres dar de baja tu cuenta?</strong><br>
           <button @click="eliminar" class="btn btn-danger col-sm-3 mt-3 mb-3">Baja</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        eliminar(){
            axios.delete("/usuario/" + this.user.id)
            .then(respuesta => {
                console.log(respuesta.data);
                alert("Esperamos volver a verte 👋🏽")
                window.location.replace("http://127.0.0.1:8000/login");
            });
        }
    },
}
</script>

<style scoped>
.elemento {
    box-shadow:
  7.6px 12.5px 2.4px rgba(0, 0, 0, 0.135);
  border-radius: 20px;
}

.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    justify-content: center;
    align-content: center;
    grid-gap: 70px;
}
</style>