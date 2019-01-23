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
    /*.container {*/
        /*height: 100%;*/
        /*width: 100%;*/
        /*background-color: dimgrey;*/
    /*}*/
    .container{
        /*height: 100%;*/
        /*width: 100%;*/
        /*background-color: gainsboro;*/
        height: 90%;
        width: 100%;
        background-image: url("../assets/contact.jpg");
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .contacts {
        display: flex;
        /*justify-content: center;*/
        align-items: center;
        flex-direction: column;
        padding-top: 20%;
        color: black;
        padding-right: 24%;
        font-weight: bold;
    }
    .contacts p a {
        color: inherit;
        text-decoration: none;
        font-size: 30px;
    }
</style>
