<script setup lang="ts">
    const toggleSidebar = () => {
        console.log('toggle');
        
    }
</script>

<template>
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