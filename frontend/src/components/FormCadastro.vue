<template>
    <MessageVue :message="message" v-show="message" />
    <form class="user" @submit="insert($event)">
        <InputFieldVue inputType="text" inputId="nome" inputPlaceholder="Informe seu nome" v-model="nome" />
        <InputFieldVue inputType="text" inputId="sobrenome" inputPlaceholder="Informe seu sobrenome"
            v-model="sobrenome" />
        <InputFieldVue inputType="email" inputId="email" inputPlaceholder="Informe seu e-mail" v-model="email" />
        <InputFieldVue inputType="password" inputId="senha" inputPlaceholder="Informe sua senha" v-model="senha" />
        <InputFieldVue inputType="password" inputId="repetir-senha" inputPlaceholder="Repita sua senha"
            v-model="repetirSenha" />
        <InputSubmitVue inputValue="Cadastrar" />
        <hr>
        <ButtonVue href="/" btnType="btn-google" faIcon="fab" faName="google" buttonContent="Cadastrar com Google" />
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
    name: 'FormCadastroVue',
    components: {
        InputFieldVue,
        InputSubmitVue,
        ButtonVue,
        MessageVue
    },
    data() {
        return {
            apiUrl: 'http://localhost:3000',
            nome: null,
            sobrenome: null,
            email: null,
            senha: null,
            repetirSenha: null,
            message: null
        }
    },
    methods: {
        async insert(event) {
            event.preventDefault();

            if (!this.nome) {
                this.showMessage('O campo nome é obrigatório.');
                return;
            }

            if (!this.sobrenome) {
                this.showMessage('O campo sobrenome é obrigatório.');
                return;
            }

            if (!this.email) {
                this.showMessage('O campo e-mail é obrigatório.');
                return;
            }

            if (!this.senha || !this.repetirSenha) {
                this.showMessage('Os campos senha ou repetir senha devem ser preenchidos.');
                return;
            }

            if (this.senha !== this.repetirSenha) {
                this.showMessage('Os campos senha e repetir senha devem ser iguais');
                return;
            }

            const body = {
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                senha: this.senha
            }

            axios.post(`${this.apiUrl}/auth/cadastro`, qs.stringify({ body: body }))
                .then(res => console.log(res))
                .catch(error => console.log(error));

        },
        showMessage(text) {
            this.message = text;
            setTimeout(() => this.message = null, 3000);
        }
    }
}
</script>