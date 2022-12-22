<template>
    <div class="form-group">
        <input :type="inputType" class="form-control form-control-user" :id="inputId" :placeholder="inputPlaceholder" :value="inputValue">
    </div>
</template>

<script>
export default {
    name: 'InputFieldVue',
    props: ['inputType', 'inputId', 'inputPlaceholder', 'inputValue']
}
</script>