<template>
    <svg v-if="name" class="qdd-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'qdd-icon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .qdd-icon {
        width: 1em;
        height: 1em;
    }
</style>