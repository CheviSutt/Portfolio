<template>
    <div class="container">
        <h1>Contact Page</h1>
        <div class="contacts">
            <p><a href="https://linkedin.com/in/chevi-sutton-639158133/">LinkedIn</a></p>
            <p><a href="https://github.com/CheviSutt">GitHub</a></p>
            <p><a href="">Email</a></p>
            <p><a href="">Instagram</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',

}
</script>

<style scoped>
    h2{
        color: blue;
    }
    .container {
        height: 100%;
        width: 100%;
        background-color: dimgrey;
    }
    .contacts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
