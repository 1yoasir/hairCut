<template>
    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Mis Clientes</div>

                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cliente, index) in clientes" :key="index">
                                <td>{{cliente.name}}</td>
                                <td>{{cliente.telephone}}</td>
                                <td>{{cliente.email}}</td>
                                <td>
                                    <router-link :to="{name: 'detalles-cliente', params:{id: cliente.id}}"><i class="fa-solid fa-eye"></i></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            clientes: []
        }
    },
    created() {
        axios.get('/usuarios/clientes')
        .then(respuesta => {
            this.clientes = respuesta.data;
        });
    },
}
</script>