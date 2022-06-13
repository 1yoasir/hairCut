<template>

    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header display-5 fondo" id="titulo">Horario de la semana</div>
                <form class="card-body">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="servicio">ENTRADA</label>
                            <input type="text" class="form-control" id="servicio" placeholder="Email" disabled>
                        </div>
                         <div class="form-group col-md-6 mb-1">
                            <label for="servicio">SALIDA</label>
                            <input type="text" class="form-control" id="servicio" placeholder="Email" disabled>
                        </div>
                    </div>
                    <strong class="text-center">Ponte en contacto con tu administrador, si quieres cambiar el turno de tu horario</strong>
                </form>
                <a class="btn btn-outline-success">Volver a mis citas</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            horarios: []
        }
    },
    created() {
        console.log(this.horarios)
        axios.get('/trabajadores')
        .then(respuesta => {
            this.horarios = respuesta.data;
        });
    },
    
}
</script>

<style scoped>
    #titulo{
        color: #b59472;
    }
    .th{
        color:#b59472
    }
    a{
        color: black;
    }
    a:hover{
        background: #b59472;
    }
    .fondo{
        background: black;
    }
    strong{
        color: #242426ba;
    }
</style>