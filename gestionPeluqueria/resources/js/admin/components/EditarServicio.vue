<template>
<div class="container card">
    <h1 class="display-5 card-header">Editar Servicio</h1>
    <form class="card-body" method="POST" @submit.prevent="actualizarServicio">
        <div class="row">
            <div class="form-group col-md-6 mb-3">
                <label for="nombre">NOMBRE DEL SERVICIO</label>
                <input type="text" class="form-control" id="nombre" v-model="servicio.nombre">
            </div>
            <div class="form-group col-md-6 mb-3">
                <label for="descripcion">DESCRIPCIÓN</label>
                <input type="text" class="form-control" id="descripcion" placeholder="Descripcion" v-model="servicio.descripcion">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3 mb-3">
                <label for="precio">PRECIO</label>
                <input type="text" class="form-control" id="precio" placeholder="precio"  v-model="servicio.precio">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label for="imagen" class="col-md-12">IMAGEN</label>
                <img :src="`/${servicio.imagen}`" style="max-height: 50px; max-width: 50px;">
            </div>
            <div class="form-group col-md-3 mb-3">
                <label for="imagen">¿QUIERES CAMBIAR DE IMÁGEN?</label>
                <input type="file" class="form-control" id="imagen" placeholder="imagen" @change="seleccionImagen" accept="image/png,image/jpeg">
            </div>
            <div class="form-group col-md-3 mb-2" style="display: none" id="contenedorImagen">
                <label for="imagen">PREVISUALIZACIÓN</label> <br>
                <img src="" style="max-height: 200px; max-width: 200px;" id="imagenSeleccionada">
            </div>
        </div>
        <button class="btn btn-outline-primary btn-lg mt-3 block col-xl-12">Actualizar</button>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            servicio: {
                nombre: '',
                precio: '',
                descripcion: '',
                imagen: '',
                nuevaImagen: null
            },
        }
    },
    created() {
        axios.get(`/servicio/id/${this.$route.params.id}`)
        .then(respuesta => {
            this.servicio = respuesta.data
        });
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

            this.servicio.nuevaImagen = file;
        },
        actualizarServicio(){
            let subir = new FormData();
            subir.append('nombre', this.servicio.nombre);
            subir.append('descripcion', this.servicio.descripcion);
            subir.append('precio', this.servicio.precio);
            subir.append('imagen', this.servicio.imagen);
            subir.append('imagennueva', this.servicio.nuevaImagen);
            subir.append("_method", "PUT");

           
            axios.post(`/servicioac/${this.$route.params.id}`, subir)
            .then(respuesta => {
                console.log(respuesta.data)
            });
            window.location.replace("http://127.0.0.1:8000/admin/servicios")
        }

    },
}
</script>