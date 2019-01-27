<template>
    <div class="containerAbout">
        <div class="card">
            <div class="header">Header</div>
            <div class="main">Main</div>
            <div class="footer">Footer</div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            author: 'Chevi Sutton',
            title: 'Skills',
        };
    },
}
</script>

<style scoped>
.containerAbout{
    height: 90%;
    width: 100%;
    background-image: url("../assets/about.jpg");
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 70%;
    height: 35%;
    border: 1px solid blue;
}

.header {
    border: 2px solid red;
}

.main {
    border: 2px solid yellow;
}

.footer {
    border: 2px solid green;
}
</style>
