<template>
    <form class="user">
        <InputFieldVue inputType="text" inputId="nome" inputPlaceholder="Informe seu nome" />
        <InputFieldVue inputType="text" inputId="sobrenome" inputPlaceholder="Informe seu sobrenome" />
        <InputFieldVue inputType="email" inputId="email" inputPlaceholder="Informe seu e-mail" />
        <InputFieldVue inputType="password" inputId="senha" inputPlaceholder="Informe sua senha" />
        <InputFieldVue inputType="password" inputId="repetir-senha" inputPlaceholder="Repita sua senha" />
        <InputSubmitVue inputValue="Cadastrar" />
        <hr>
        <ButtonVue href="/" btnType="btn-google" faIcon="fab" faName="google" buttonContent="Cadastrar com Google" />
    </form>
</template>

<script>
import InputFieldVue from './formComponents/InputField.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';
import ButtonVue from './Button.vue';

export default {
    name: 'FormCadastroVue',
    components: {
        InputFieldVue,
        InputSubmitVue,
        ButtonVue
    }
}
</script>