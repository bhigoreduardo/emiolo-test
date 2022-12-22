<template>
    <form class="user">
        <InputFieldVue inputType="email" inputId="email" inputPlaceholder="Informe seu e-mail" />
        <InputFieldVue inputType="password" inputId="senha" inputPlaceholder="Informe sua senha" />
        <InputSubmitVue inputValue="Login" />
        <hr>
        <ButtonVue href="/" btnType="btn-google" faIcon="fab" faName="google" buttonContent="Login com Google" />
    </form>
</template>

<script>
import InputFieldVue from './formComponents/InputField.vue';
import InputSubmitVue from './formComponents/InputSubmit.vue';
import ButtonVue from './Button.vue';

export default {
    name: 'FormLoginVue',
    components: {
        InputFieldVue,
        InputSubmitVue,
        ButtonVue
    }
}
</script>