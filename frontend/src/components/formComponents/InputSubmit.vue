<template>
    <div class="form-group">
        <input class="btn btn-primary btn-user btn-block" type="submit" :value="inputValue">
    </div>
</template>

<script>
export default {
    name: 'InputSubmitVue',
    props: ['inputValue']
}
</script>