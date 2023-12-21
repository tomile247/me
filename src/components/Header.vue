<script setup lang="ts">
    import Banner from './Banner.vue';

    const toggleSidebar = () => {
        console.log('toggle');
        
    }
</script>

<template>
    <Banner></Banner>
    <header>
        <span>
            TOMISLAV LEVKUŠ
        </span>
        <img @click="toggleSidebar()" src="../assets/menu.svg"/>
    </header>
</template>

<style>
    header {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background-color: white;
    }

    .navigation {
        list-style: none;
    }

</style>