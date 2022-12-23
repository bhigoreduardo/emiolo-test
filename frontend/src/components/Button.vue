<template>
    <a :href="href" class="btn" :class="btnType" @click="$emit('click:modelButton')">
        <fa :icon="[`${faIcon}`, `${faName}`]" />
        {{ buttonContent }}
    </a>
</template>

<script>
export default {
    name: 'ButtonVue',
    props: ['href', 'btnType', 'faIcon', 'faName', 'buttonContent'],
    emits: ['click:modelButton']
}
</script>

<style scoped>
.btn-google {
    color: #fff;
    background-color: #ea4335;
    border-color: #fff;
    transition: all .15s ease-in-out;
}

.btn-google:hover {
    color: #fff;
    background-color: #e12717;
    border-color: #e6e6e6;
}
</style>