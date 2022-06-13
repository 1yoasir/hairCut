<nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                @auth
                @if(auth()->user()->role == 'CLI')
                <a class="navbar-brand" href="{{ url('/cliente') }}">
                    {{ 'HairCut' }}
                </a>

                @if(auth()->user()->imgPerfil == null)
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                @else
                <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style="height: 40px; width: 40px;">
                    <img src="/{{Auth::user()->imgPerfil}}" style="width: 100%; height: 100%; border-radius:150px; border:1px solid #666;"></img>
                </div>
                @endif

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <a href="{{ url('cliente/citas') }}" class="nav nav-link">Mis Citas</a>
                        <a href="{{ url('cliente/servicios') }}" class="nav nav-link">Servicios</a>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="http://127.0.0.1:8000/cliente/editarperfil">Editar Perfil</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                @elseif(auth()->user()->role == 'ADM')
                <a class="navbar-brand" href="{{ url('/admin') }}">
                    {{ 'HairCut' }}
                </a>

                @if(auth()->user()->imgPerfil == null)
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                @else
                <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style="height: 40px; width: 40px;">
                    <img src="/{{Auth::user()->imgPerfil}}" style="width: 100%; height: 100%; border-radius:150px; border:1px solid #666;"></img>
                </div>
                @endif

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <a href="{{ url('/admin/trabajadores') }}" class="nav nav-link">Trabajadores</a>
                        <a href="{{ url('/admin/clientes') }}" class="nav nav-link">Clientes</a>
                        <a href="{{ url('admin/citas') }}" class="nav nav-link">Citas</a>
                        <a href="{{ url('admin/servicios') }}" class="nav nav-link">Servicios</a>
                        <a href="{{ url('admin/horarios') }}" class="nav nav-link">Horarios</a>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                @else
                <a class="navbar-brand" href="{{ url('/trabajador') }}">
                    {{ 'HairCut' }}
                </a>

                @if(auth()->user()->imgPerfil == null)
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                @else
                <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style="height: 40px; width: 40px;">
                    <img src="/{{Auth::user()->imgPerfil}}" style="width: 100%; height: 100%; border-radius:150px; border:1px solid #666;"></img>
                </div>
                @endif

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">
                        <a href="{{ url('/trabajador/citas') }}" class="nav nav-link">Mis Citas</a>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->

                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }}
                            </a>

                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="http://127.0.0.1:8000/trabajador/editarperfil">Editar Perfil</a>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>

                @endif
                

                @else
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ 'HairCut' }}
                </a>
                @endAuth
        </nav>