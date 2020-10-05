<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: 'OrangeTabsHead',
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                // 每次变更selected时通知head
                console.log(item);
                console.log(vm.$el.getBoundingClientRect());
            })
        }
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        position: relative;
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $blue;
            width: 100px;
        }
    }
</style>