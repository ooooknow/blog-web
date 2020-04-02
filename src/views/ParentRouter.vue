<template>
    <section class="parent-main">
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
        </transition>
    </section>
</template>

<script>
export default {
    name: 'ParentMain',
    computed: {
        key() {
            return this.$route.path;
        },
    },
};
</script>
