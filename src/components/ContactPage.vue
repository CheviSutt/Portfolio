<template>
    <div class="container">
        <div class="contacts">
            <!--<p><a href="https://linkedin.com/in/chevi-sutton-639158133/">LinkedIn</a></p>-->
            <p><a v-bind:href="linkedIn">LinkedIn</a></p>
            <p><a v-bind:href="gitHub">GitHub</a></p>
            <p><a v-bind:href="codePen">CodePen</a></p>
            <p><a href="">Email</a></p>
            <p><a href="">Instagram</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            linkedIn: "https://linkedin.com/in/chevi-sutton-639158133/",
            gitHub:  "https://github.com/CheviSutt",
            codePen: "https://codepen.io/chevisutt/",
        };
    },
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
        padding-top: 12%;
    }
</style>
