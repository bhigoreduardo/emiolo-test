<template>
    <div class="message">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'MessageVue',
    props: ['message']
}
</script>

<style scoped>
.message {
    display: flex;
    align-items: center;
    justify-content: center;

    color: #004085;
    background-color: #cce5ff;
    border: 2px solid #b8daff;
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 1rem;
}
</style>