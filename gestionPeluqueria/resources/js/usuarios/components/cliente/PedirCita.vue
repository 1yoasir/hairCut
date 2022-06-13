<template>
    <div class="card">
        <div class="card-header">Pedir Cita</div>
        <form class="card-body" @submit.prevent="crearCita">
            <input type="hidden" id="cliente" v-model="user.id">
            <div class="row mb-1">
                <div class="form-group col-md-6">
                    <label for="trabajador">TRABAJADORES</label>
                    <div class="input-group mb-3 col-md-12">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="trabajador">Trabajador</label>
                        </div>
                        <select class="custom-select col-md-8" id="trabajador" @change="mostrarHoras()" v-model="cita.id_trabajador">
                            <option selected value="0">Selecciona un trabajador</option>
                            <option v-for="(trabajador, index) in trabajadores" :key="index" :value="trabajador.id">{{trabajador.name}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <label for="servicio">SERVICIOS</label>
                    <div class="input-group mb-3 col-md-12">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="servicio">Servicio</label>
                        </div>
                        <select class="custom-select col-md-8" id="servicio" @change="mostrarPrecio()" v-model="cita.servicio">
                            <option selected value="0">Selecciona un servicio</option>
                            <option v-for="(servicio, index) in servicios" :key="index">{{servicio.nombre}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label for="telephone">FECHA</label>
                    <input type="date" class="form-control mb-3" id="telephone" placeholder="fecha" v-model="cita.fecha">
                </div>
                <div class="form-group col-md-4">
                    <label for="horas">HORAS</label>
                    <div class="input-group col-md-2 mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="horas">Hora</label>
                        </div>
                        <select class="custom-select col-md-8" id="horas" disabled @change="comprobarCita(cita.fecha, cita.hora, cita.id_trabajador)" v-model="cita.hora">
                            <option selected value="0">Selecciona una hora</option>
                            <option v-for="(hora, index) in horas" :key="index">{{hora}}</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-4 mb-3">
                    <label for="precio">PRECIO</label>
                    <input type="text" class="form-control" id="precio" disabled v-model="cita.precio" value="">
                </div>
                <div class="form-group col-md-12">
                    <label for="precio">Comentarios</label>
                    <input type="text" class="form-control" id="precio"  v-model="cita.comentario" value="">
                </div>
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mt-3 block col-xl-12">Solicitar Cita</button>
            <a class="btn btn-outline-danger btn-lg mt-3 block col-xl-12" @click="cancelar()">Cancelar</a>
        </form>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            servicios: [],
            horas: [],
            trabajadores: [],
            cita: {
                'id_cliente': '',
                'id_trabajador': '',
                'servicio': '',
                'id_servicio': '',
                'fecha': '',
                'hora': '',
                'precio': '',
                'comentario': ''
            },
            existe: '',
            cliente: {
                nombre:  ''
            }
        }
    },
    created() {
        axios.get('/serviciosAll')
        .then(respuesta => {
            this.servicios = respuesta.data;
        });
        axios.get('/usuarios/trabajadores')
        .then(respuesta => {
            this.trabajadores = respuesta.data;
        });
        axios("/usuario/" + this.user.id)
            .then(respuesta => {
                this.cliente.nombre = respuesta.data.name;
            })
    },
    methods: {
        anterior(){
            this.$router.go(-1)
        },
        mostrarHoras(){
            document.getElementById("horas").disabled = false;
            axios.get(`/usuarios/trabajador/${this.cita.id_trabajador}/horas`)
            .then(respuesta => {
                this.horas = respuesta.data;
            })
        },
        mostrarPrecio(){
            axios.get(`/servicio/${this.cita.servicio}`)
            .then( respuesta => {
                this.cita.precio = respuesta.data[0]['precio'];
                this.cita.id_servicio = respuesta.data[0]['id'];
            })
        },
        comprobarCita(fecha, hora, trabajador){
            axios.get(`/cita/fecha/${fecha}/hora/${hora}/trabajador/${trabajador}`)
                .then(respuesta => {
                    this.existe = Object.keys(respuesta.data).length === 0;
                });
            if(this.existe){
                alert("cambia la cita")
            }
        },
        crearCita(){
            let trabajador =  document.getElementById('trabajador');
            let nombreTrabajador = trabajador.options[trabajador.selectedIndex].text;
            
            const params = {
                id_cliente: this.user.id, 
                id_trabajador: this.cita.id_trabajador, 
                id_servicio: this.cita.id_servicio, 
                fecha: this.cita.fecha, 
                hora: this.cita.hora,
                precio: this.cita.precio,
                nom_trabajador: nombreTrabajador,
                nom_cliente: this.cliente.nombre,
                comentario: this.cita.comentario
            };
            
            axios.post('/cita', params)
                    .then(respuesta => {
                        alert("Cita creada correctamente");
                        window.location.replace("http://127.0.0.1:8000/cliente/citas");
                    });
        },
        cancelar(){
            this.$router.go(-1)
        }
    }
}
</script>