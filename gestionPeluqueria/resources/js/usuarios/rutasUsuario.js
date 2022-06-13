// COMPONENTES CLIENTE
const BienvenidaCliente = () => import('./components/cliente/Bienvenida.vue');
const CitasCliente = () => import('./components/cliente/Citas.vue');
const PedirCita = () => import('./components/cliente/PedirCita.vue');
const Servicios = () => import('./components/cliente/Servicios.vue');

//COMPONENTES COMUNES
const VerCita = () => import('../comunes/VerCita.vue');
const EditarPerfil = () => import('../comunes/EditarPerfil.vue');
const EditarDatos = () => import('../comunes/EditarDatos.vue');
const CambiarContraseña = () => import('../comunes/CambiarContraseña.vue');

//COMPONENTES TRABAJADOR
const BienvenidaTrabajador = () => import('./components/trabajador/Bienvenida.vue');
const CitasTrabajador = () => import('./components/trabajador/Citas.vue');
const Horario = () => import('./components/trabajador/Horario.vue');
const cambiarHorario = () => import('./components/trabajador/CambiarHorario.vue');

export const rutasUsuario = [
    //RUTAS DEL CLIENTE
    {
        name: 'bienvenida-cliente',
        path: '/cliente',
        component: BienvenidaCliente
    },
    {
        name: 'citas-cliente',
        path: '/cliente/citas',
        component: CitasCliente
    },
    {
        name: 'pedir-cita',
        path: '/cliente/cita/crear',
        component: PedirCita,
    },
    {
        name: 'ver-cita',
        path: '/cliente/cita/:id',
        component: VerCita
    },
    {
        name: 'servicios',
        path: '/cliente/servicios',
        component: Servicios
    },
    {
        name: 'editar-perfil',
        path: '/cliente/editarperfil',
        component: EditarPerfil
    },
    {
        name: 'EditarDatos',
        path: '/cliente/editarperfil/datos',
        component: EditarDatos
    },
    {
        name: 'CambiarContraseña',
        path: '/cliente/editarperfil/contrasenna',
        component: CambiarContraseña
    },

    //RUTAS DEL TRABAJADOR
    {
        name: 'bienvenida-trabajador',
        path: '/trabajador',
        component: BienvenidaTrabajador
    },
    {
        name: 'citas-trabajador',
        path: '/trabajador/citas',
        component: CitasTrabajador
    },
    {
        name: 'ver-citaT',
        path: '/trabajador/cita/:id',
        component: VerCita
    },
    {
        name: 'horario',
        path: '/trabajador/horario',
        component: Horario
    },
    {
        name: 'cambiar-horario',
        path: '/trabajador/horario/editar',
        component: cambiarHorario
    },
    {
        name: 'editar-perfil-trabajador',
        path: '/trabajador/editarperfil',
        component: EditarPerfil
    },
];