<template>
    <div class="card">
        <div class="card-header">Editar Horario</div>
        <form class="card-body" @submit.prevent="editar">
            <div class="row mb-3">
                <div class="form-group col-md-6">
                    <label for="name">NOMBRE</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="trabajador.name">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-8">
                    <label for="horario">HORARIO</label>
                    <div class="input-group mb-3 col-md-12">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="horario">Opciones</label>
                        </div>
                        <select class="custom-select col-md-10" id="horario" v-model="trabajador.horario">
                            <option selected value="0">Selecciona un horario</option>
                            <option v-for="(horario, index) in horarios" :key="index" :value="horario.id">{{horario.inicio}} - {{horario.fin}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mt-3 block col-xl-12">Editar Horario</button>
            <a class="btn btn-outline-danger btn-lg mt-3 block col-xl-12" @click="cancelar()">Cancelar</a>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            trabajador: {
                name: '',
                horario: '',
            },
            horarios: [],
        }
    },
    created() {
        axios.get(`/usuario/${this.$route.params.id}`)
        .then(respuesta => {
            this.trabajador = respuesta.data;
        });
        axios.get('/horarios')
        .then(respuesta =>{
            this.horarios = respuesta.data;
        })
        
    },
    methods: {
        editar(){
            if(this.trabajador.horario == undefined){
                alert("No ha editado el horario");
            } else{
                alert("enviado a editar")
                axios.put(`/usuario/trabajador/${this.$route.params.id}`, this.trabajador);
                window.location.replace("http://127.0.0.1:8000/admin/trabajadores");
            }
        },
        cancelar(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
</style>