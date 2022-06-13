<template>
    <div class="card">
        <div class="card-header">Crear Trabajador</div>
        <form class="card-body" @submit.prevent="crear">
            <input type="hidden" id="role" value="TRA" v-model="trabajador.role">
            <div class="row mb-3">
                <div class="form-group col-md-6">
                    <label for="name">NOMBRE</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" v-model="trabajador.name">
                </div>
                <div class="form-group col-md-6">
                    <label for="email">EMAIL</label>
                    <input type="email" class="form-control" id="email" placeholder="Trabajador" v-model="trabajador.email">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <label for="telephone">TELEFONO</label>
                    <input type="text" class="form-control" id="telephone" placeholder="telephone" v-model="trabajador.telephone">
                </div>
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
                <div class="form-group col-md-5">
                    <label for="inputFecha">CONTRASEÑA</label>
                    <input type="password" class="form-control" id="password" v-model="trabajador.password">
                </div>
                <div class="form-group col-md-5">
                    <label for="inputHora">CONFIRMA CONTRASEÑA</label>
                    <input type="password" class="form-control" id="passwordconfir" v-model="trabajador.password_confirm">
                </div>
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mt-3 block col-xl-12">Crear Trabajador</button>
            <button class="btn btn-outline-danger btn-lg mt-3 block col-xl-12" @click="cancelar()">Cancelar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            horarios: [],
            trabajador: {
                'name' : '',
                'role' : 'TRA',
                'telephone' : '',
                'email' : '',
                'password' : '',
                'password_confirm': '',
                'horario' : 'Selecciona un horario',
            }
        }
    },
    created() {
        axios.get('/horarios')
        .then(respuesta => {
            this.horarios = respuesta.data;
        })
    },
    methods: {
        cancelar (){
            this.$root.$emit('ocultarCrear', false);
        },
        crear(){
            const params = {
                name: this.trabajador.name,
                role: this.trabajador.role,
                telephone: this.trabajador.telephone,
                password: this.trabajador.password,
                email: this.trabajador.email,
                horario: this.trabajador.horario,
            };
            if(this.trabajador.password == this.trabajador.password_confirm){
                axios.post('/usuario', params)
                .then(respuesta => {
                    console.log(respuesta.data);
                    alert("Has creado un nuevo trabajador");
                    this.$router.go("/admin/trabajadadores")
                });
            } else {
                alert("deben coincidir")
            }
            
            // window.location.replace("http://127.0.0.1:8000/admin/trabajadores");
        }
    },
}
</script>

<style scoped>
</style>