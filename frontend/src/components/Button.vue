<template>
    <a :href="href" :class="btnType" @click="$emit('click:modelButton')">
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
.btn-planets,
.btn-people {
    color: #fff;
    border-color: #fff;
    transition: all .15s ease-in-out;
    border-radius: 10rem !important;
    padding: 7px !important;
    cursor: pointer;
    text-decoration: none;
}

.btn-planets{
    background-color: #dfa70c;
}

.btn-people {
    background-color: #ea4335;
}

.btn-planets:hover{
    background-color: #d09c0c;
}

.btn-people:hover {
    background-color: #e12717;
}
</style>