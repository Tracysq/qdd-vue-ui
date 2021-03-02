<template>
    <svg v-if="name" class="qdd-icon" aria-hidden="true">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="scss">
    .qdd-icon {
        width: 1em;
        height: 1em;
    }
</style>