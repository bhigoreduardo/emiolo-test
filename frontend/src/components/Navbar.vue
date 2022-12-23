<template>
    <nav class="navbar navbar-light bg-white mb-4 static-top shadow d-flex justify-content-center gap-3">
        <ButtonVue btnType="btn-people" faIcon="fas" faName="user" buttonContent="People" @click:modelButton="searchApi('people')" />
        <ButtonVue btnType="btn-planets" faIcon="fas" faName="user" buttonContent="Planets" @click:modelButton="searchApi('planets')" />
        <img :src="userImage" />
        <p class="row">
            <span class="username">{{ nome }} {{ sobrenome }},</span>
            <span class="email">{{ email }}</span>
        </p>
        <button class="btn-light " @click="loggout">
            <fa icon="sign-out" />
            Sair
        </button>
    </nav>
    <SearchApiVue v-show="target" :target="target" @click:modelTimes="closeSearchApi" />
</template>

<script>
import ButtonVue from './Button.vue';
import InputFieldVue from './formComponents/InputField.vue';
import SearchApiVue from './SearchApi.vue';

export default {
    name: 'NavbarVue',
    components: {
        ButtonVue,
        InputFieldVue,
        SearchApiVue
    },
    data() {
        return {
            userImage: '/images/male-profile.svg',
            nome: null,
            sobrenome: null,
            email: null,
            target: null
        }
    },
    mounted() {
        const usuario = JSON.parse(localStorage.getItem('usuarioAuth'));

        this.nome = usuario.nome;
        this.sobrenome = usuario.sobrenome;
        this.email = usuario.email;
    },
    methods: {
        searchApi(target) {
            this.target = target;
        },
        closeSearchApi() {
            this.target = null;
        },
        loggout() {
            localStorage.removeItem('tokenJWT');
            localStorage.removeItem('usuarioAuth');

            window.location.href = '/';
        }
    }
}
</script>

<style scoped>
img {
    width: 32px;
}
</style>