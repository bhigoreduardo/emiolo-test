<template>
    <nav class="navbar navbar-light bg-white mb-4 static-top shadow d-flex justify-content-center gap-3">
        <img :src="userImage" class="" />
        <p class="row">
            <span class="username">{{ nome }} {{ sobrenome }},</span>
            <span class="email">{{ email }}</span>
        </p>
        <button class="btn-light ">
            <fa icon="sign-out" />
            Sair
        </button>
    </nav>
</template>

<script>
export default {
    name: 'NavbarVue',
    data() {
        return {
            userImage: '/images/male-profile.svg',
            nome: null,
            sobrenome: null,
            email: null
        }
    },
    mounted() {
        const usuario = JSON.parse(localStorage.getItem('usuarioAuth'));

        this.nome = usuario.nome;
        this.sobrenome = usuario.sobrenome;
        this.email = usuario.email;
    }
}
</script>

<style scoped>
img {
    width: 32px;
}
</style>