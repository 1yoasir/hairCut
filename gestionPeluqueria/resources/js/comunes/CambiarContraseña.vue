<template>
    <div class="container col-md-8">
        <div class="card sombra">
            <h5 class="card-header">Cambio de contraseña</h5>
            <form class="card-body" @submit.prevent="cambioContra">
                <div class="form-group grid">
                    <div class="mb-3">
                        <label for="contraseñaActual">Introduce la nueva contraseña</label><br>
                        <input type="password" id="contraseñaActual" placeholder="Nueva contraseña" v-model="contrasenna.contrasenna1" required>
                    </div>
                    <div class="mb-3">
                        <label for="contraseñaActual">Repite la nueva contraseña</label><br>
                        <input type="password" id="contraseñaActual" placeholder="Nueva contraseña" v-model="contrasenna.contrasenna2" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-success">Cambiar</button>
                <a @click="cancelar" class="btn btn-outline-danger">Cancelar</a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contrasenna:{
                contrasenna1: '',
                contrasenna2: ''
            },
        }
    },
    methods: {
        cancelar(){
            this.$router.go(-1);
        },
        cambioContra(){
            if(this.contrasenna.contrasenna1 == 0 && this.contrasenna.contrasenna2 == 0){
                alert("Debe rellenar los campos si quiere cambiar la contraseña")
            } else if(this.contrasenna.contrasenna1 != this.contrasenna.contrasenna2){
                alert("Las contraseñas no coinciden")
            } else{
                axios.put("/usuario/" + this.user.id + "/contrasenna", this.contrasenna)
                .then(respuesta => {
                    console.log(respuesta.data);
                });
                window.location.replace("http://127.0.0.1:8000/cliente/")
            }
        }
    },
}
</script>

<style scoped>
.grid{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
}

.sombra{
    box-shadow:
  5.7px 9.4px 59.3px rgba(0, 0, 0, -0.014),
  11.4px 18.8px 65.5px rgba(0, 0, 0, -0.026),
  17.3px 28.5px 69.6px rgba(0, 0, 0, -0.033),
  23.6px 38.8px 73.1px rgba(0, 0, 0, -0.029),
  30.2px 49.8px 76.5px rgba(0, 0, 0, 0.013),
  37px 61px 80px rgba(0, 0, 0, 0.25)
;

}
</style>