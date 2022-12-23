<template>
    <MessageVue :message="message" v-show="message" />
    <form class="user" @submit="login($event)">
        <InputFieldVue inputType="email" inputId="email" inputPlaceholder="Informe seu e-mail" v-model="email" />
        <InputFieldVue inputType="password" inputId="senha" inputPlaceholder="Informe sua senha" v-model="senha" />
        <InputSubmitVue inputValue="Login" />
        <ButtonVue href="/" btnType="btn-google" faIcon="fab" faName="google" buttonContent="Login com Google" />
    </form>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

import InputFieldVue from './formComponents/InputField.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';
import ButtonVue from './Button.vue';
import MessageVue from './Message.vue';

export default {
    name: 'FormLoginVue',
    components: {
        InputFieldVue,
        InputSubmitVue,
        ButtonVue,
        MessageVue
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000',
            email: null,
            senha: null,
            message: null
        }
    },
    methods: {
        async login(event) {
            event.preventDefault();

            if (!this.email) {
                this.showMessage('O campo e-mail é obrigatório', 'campo');
                return;
            }

            if (!this.senha) {
                this.showMessage('O campo senha é obrigatório', 'campo');
                return;
            }

            const body = {
                email: this.email,
                senha: this.senha
            }

            axios.post(`${this.apiUrl}/auth/autenticacao`, qs.stringify(body))
                .then(res => {
                    localStorage.setItem('tokenJWT', JSON.stringify(res.data.token));
                    localStorage.setItem('usuarioAuth', JSON.stringify(res.data.usuario));
                    this.showMessage('Login realizado com sucesso! Você será redirecionado.', 'login');
                })
                .catch(error => {
                    this.showMessage(error.response.data.errors[0].msg, 'campo');
                });
        },
        showMessage(text, condition) {
            this.message = text;

            if (condition === 'login') {
                setTimeout(() => window.location.href = '/painel', 3000);
                return;
            }

            setTimeout(() => this.message = null, 3000);
        }
    }
}
</script>