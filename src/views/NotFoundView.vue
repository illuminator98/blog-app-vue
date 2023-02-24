<template>
    <div class="container mt-5 text-center">
        <h1>Page not found</h1>
        <div>Go back to <router-link :to="{name: 'home'}">home page</router-link></div>
    </div>
</template>
<script>
export default {
    name: 'NotFoundView'
}
</script>