<template>
    <div class="container">
        <div class="card">
            <div class="contacts">
                <p><a v-bind:href="linkedIn">LinkedIn</a></p>
                <p><a v-bind:href="gitHub">GitHub</a></p>
                <p><a v-bind:href="codePen">CodePen</a></p>
            </div>
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
    .container{
        height: 100%;
        width: 100%;
        background-image: url("../assets/contact.jpg");
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 28rem;
        padding-right: 28rem;
        padding-left: 6rem;
    }
    .contacts {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-right: 2.5rem;
        padding-left: 2.5rem;
        color: black;
        font-weight: bold;
        width: 6rem;
        background-color: hsla(0, 100%, 90%, 0.3);
        border-radius: 4px;
    }
    .contacts p a {
        color: inherit;
        text-decoration: none;
        font-size: 30px;
        padding-left: 2px;
        padding-right: 2px;
    }
    .contacts p a:hover {
        color: whitesmoke;
    }
</style>
