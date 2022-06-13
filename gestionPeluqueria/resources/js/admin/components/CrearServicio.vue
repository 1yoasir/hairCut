<template>
<div class="card mt-5">
    <h1 class="display-5 card-header">NUEVO SERVICIO</h1>
    <form class="card-body" @submit.prevent="crearServicio">
        <div class="row mb-2">
            <div class="form-group col-md-4 mb-2">
                <label for="nombre">NOMBRE DEL SERVICIO</label>
                <input type="text" class="form-control" id="nombre" v-model="servicio.nombre">
            </div>
            <div class="form-group col-md-8 mb-2">
                <label for="descripcion">DESCRIPCIÓN</label>
                <input type="text" class="form-control" id="descripcion" placeholder="Trabajador" v-model="servicio.descripcion">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-md-3 mb-2">
                <label for="precio">PRECIO</label>
                <input type="text" class="form-control" id="precio" placeholder="Precio" v-model="servicio.precio">
            </div>
            <div class="form-group col-md-3 mb-2">
                <label for="imagen">IMAGEN</label>
                <input type="file" class="form-control" id="imagen" placeholder="Trabajador" @change="nombreFile" accept="image/png,image/jpeg">
            </div>
            <div class="form-group col-md-3 mb-2" style="display: none" id="contenedorImagen">
                <label for="imagen">PREVISUALIZACIÓN</label> <br>
                <img src="" style="max-height: 200px; max-width: 200px;" id="imagenSeleccionada">
            </div>
        </div>
        <button type="submit" class="btn btn-outline-primary btn-lg mt-3 col-xl-4">Crear</button>
        <button class="btn btn-outline-danger btn-lg mt-3 col-xl-4"  @click="cancelar()">Cancelar</button>
    </form>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            servicio: {
                nombre: '',
                descripcion: '',
                precio: '',
                imagen: null,
            },
        }
    },
    methods: {
        nombreFile(){
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
            
            let file = document.getElementById("imagen").files[0]
            console.log(file);

            this.servicio.imagen = file;

        },
        crearServicio(){
            // const params = {
            //     nombre: this.servicio.nombre,
            //     descripcion: this.servicio.descripcion,
            //     precio: this.servicio.precio,
            //     imagen: this.servicio.imagen,
            // };

            let subir = new FormData();
            subir.append('nombre', this.servicio.nombre);
            subir.append('descripcion', this.servicio.descripcion);
            subir.append('precio', this.servicio.precio);
            subir.append('imagen', this.servicio.imagen);
            
            axios.post("/servicio", subir)
            .then(respuesta => {
                console.log(respuesta.data);
                alert("Servicio creado");
                this.$router.go("/admin/servicios");
            });
        },
        cancelar (){
            this.$root.$emit('ocultarCrearServicio', false);
        },
    },
}
</script>