<template>
<div class="card">
    <h5 class="card-header">Tu perfil</h5>
    <form class="card-body" method="POST" @submit.prevent="actualizar">
        <div class="row">
            <div class="form-group col-md-6 mb-3">
                <label for="inputCliente">NOMBRE</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="user.name">
            </div>

            <div class="form-group col-md-3 mb-3">
                <label for="inputTrabajador">Foto de perfil</label>
                <input type="file" class="form-control" id="imagen" placeholder="Imagen" @change="seleccionImagen" accept="image/png,image/jpeg">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3 mb-3">
                <label for="inputCliente">EMAIL</label>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label for="inputTrabajador">TELEFONO</label>
                <input type="text" class="form-control" id="telephone" placeholder="telephone" v-model="user.telephone">
            </div>
            <div class="form-group col-md-3 mb-2" style="display: none" id="contenedorImagen">
                <label for="imagen">PREVISUALIZACIÓN</label> <br>
                <img src="" style="max-height: 200px; max-width: 200px;" id="imagenSeleccionada">
            </div>
        </div>
        <button type="submit" class="btn btn-outline-success btn-lg mt-3 block col-xl-12">Actualizar Datos</button>
        <a class="btn btn-outline-danger btn-lg mt-3 block col-xl-12" @click="anterior">Volver</a>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                name: '',
                email: '',
                telephone: '',
                imagen: ''
            }
        }
    },
    methods: {
        seleccionImagen(){
            const archivos = document.getElementById("imagen").files;
            const mostrarImagen = document.getElementById("imagenSeleccionada")
            document.getElementById("contenedorImagen").style.display = "block"
            
            if(!archivos || !archivos.length){
                mostrarImagen.src = "";
                return
            }
            const primerArchivo = archivos[0];
            const objectURL = URL.createObjectURL(primerArchivo);
            mostrarImagen.src = objectURL;

            let file = document.getElementById("imagen").files[0];

            this.usuario.imagen = file;
        },

        anterior(){
            this.$router.go(-1);
        },
        actualizar(){
            this.usuario.name = this.user.name;
            this.usuario.email = this.user.email;
            this.usuario.telephone = this.user.telephone;

            let enviar = new FormData();
            enviar.append('name', this.usuario.name);
            enviar.append('email', this.usuario.email);
            enviar.append('telephone', this.usuario.telephone);
            enviar.append('imagen', this.usuario.imagen);
            enviar.append('_method', 'PUT');

            axios.post("/usuario/" + this.user.id, enviar)
            .then(respuesta => {
                console.log(respuesta.data);
                alert("Datos modificados correctamente")
            });
            if(this.user.role == 'CLI'){
                this.$router.replace("/cliente");
            } else{
                this.$router.replace("/trabajador");
            }
            
            
        }
    },
}
</script>