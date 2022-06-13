const Bienvenida = () => import('./components/Bienvenida.vue');
const Clientes = () => import('./components/Clientes.vue');
const Trabajadores = () => import('./components/Trabajadores.vue');
const Citas = () => import('./components/Citas.vue');
const VerCita = () => import('../comunes/VerCita.vue');
const DetalleCita = () => import('./components/DetalleCita.vue');
const DetalleTrabajador = () => import('./components/DetallesTrabajador.vue');
const EditarTrabajador = () => import('./components/EditarTrabajador.vue');
const DetalleCliente = () => import('./components/DetalleCliente.vue');
const Servicios = () => import('./components/Servicios.vue');
const EditarServicio = () => import('./components/EditarServicio.vue');
const Horarios = () => import('./components/Horarios.vue');
const EditarHorario = () => import('./components/EditarHorario.vue');

export const rutasAdmin = [
    {
        name: 'bienvenida',
        path: '/admin',
        component: Bienvenida
    },

    /* RUTAS CLIENTE */

    {
        name: 'clientes',
        path: '/admin/clientes',
        component: Clientes
    },

    // {
    //     name: 'cliente-citas',
    //     path: '/admin/cliente/:id/citas',
    //     component: CitasCliente
    // },

    {
        name: 'detalles-cliente',
        path: '/admin/cliente/:id',
        component: DetalleCliente
    },

    {
        name: 'detalles-cita',
        path: '/admin/cita/:id',
        component: VerCita
    },

    /** RUTAS TRABAJADOR */

    {
        name: 'trabajadores',
        path: '/admin/trabajadores',
        component: Trabajadores
    },
    
    {
        name: 'ver-trabajador',
        path: '/admin/trabajador/:id',
        component: DetalleTrabajador
    },
    {
        name: 'editarHorarioTrabajador',
        path: '/admin/trabajador/:id/editar',
        component: EditarTrabajador
    },

    /** RUTAS CITAS */

    {
        name: 'citas',
        path: '/admin/citas',
        component: Citas
    },

    /** RUTAS SERVICIOS */ 
    {
        name: 'servicios',
        path: '/admin/servicios',
        component: Servicios
    },
    {
        name: 'editar-servicio',
        path: '/admin/servicio/:id',
        component: EditarServicio
    },

    /** RUTAS HORARIOS */
    {
        name: 'horarios',
        path: '/admin/horarios',
        component: Horarios
    },
    {
        name: 'editarHorario',
        path: '/admin/horario/:id',
        component: EditarHorario
    },
];