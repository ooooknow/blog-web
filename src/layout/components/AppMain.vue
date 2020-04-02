<template>
    <el-scrollbar wrap-class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </el-scrollbar>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.path;
        },
    },
};
</script>

<style scoped>
.app-main {
    min-height: calc(100vh - 64px);
    width: 100%;
    position: relative;
    overflow: scroll;
    padding-top: 64px;
}
</style>
