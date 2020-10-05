<template>
    <div class="tabs-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'OrangeTabsHead',
        inject: ['eventBus'],
        created() {
            
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
    }
</style>