<template>
    <nav class="navbar navbar-light bg-white mb-4 static-top shadow d-flex justify-content-center gap-3">
        <img :src="userImage" class="" />
        <p class="row">
            <span class="username">John Doe,</span>
            <span class="email">johndoe@email.com</span>
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
            userImage: '/images/male-profile.svg'
        }
    }
}
</script>

<style scoped>
img {
    width: 32px;
}
</style>