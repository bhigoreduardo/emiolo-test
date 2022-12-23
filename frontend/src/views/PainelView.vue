<template>
    <NavbarVue />

    <div class="container">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Usuário cadastrados</h6>
            </div>
        </div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead class="bg-white">
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>

                    <tbody class="bg-white">
                        <tr v-for="usuario of usuarios" :key="usuario._id">
                            <td v-text="usuario._id"></td>
                            <td v-text="usuario.nome"></td>
                            <td v-text="usuario.sobrenome"></td>
                            <td v-text="usuario.email"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import NavbarVue from '@/components/Navbar.vue';

export default {
    name: 'PainelView',
    components: {
        NavbarVue
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000',
            usuarios: []
        }
    },
    mounted() { },
    methods: {
        async findAll() {
            axios.get(`${this.apiUrl}/auth/registros`)
                .then(res => console.log(res))
                .catch(error => console.log(error));
        }
    }
}
</script>