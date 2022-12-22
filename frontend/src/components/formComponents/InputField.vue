<template>
    <div class="form-group">
        <input class="form-control form-control-user"
            :type="inputType"
            :id="inputId"
            :placeholder="inputPlaceholder"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    name: 'InputFieldVue',
    props: ['inputType', 'inputId', 'inputPlaceholder'],
    emits: ['update:modelValue']
}
</script>