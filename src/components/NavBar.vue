<template>
    <div class="navBar">
        <div class="logo">
            <!--<h2>Chev Dev</h2>-->
            <router-link to="/" tag="h2">Chev Dev</router-link>
        </div>
        <router-link to="/" tag="button">Home<i class="fas fa-home"></i></router-link>
        <router-link to="/about" tag="button">About<i class="fas fa-info-circle"></i></router-link>
        <router-link to="/contact" tag="button">Contact<i class="fas fa-hands-helping"></i></router-link>
    </div>
</template>

<script>
    import router from 'vue-router';
    export default {
        name: 'NavBar'
    }
</script>


<style>
.logo {
    font-family: 'Permanent Marker', cursive;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: .5rem;
    padding-right: .5rem;
    margin-right: auto;
    margin-left: .5rem;
    background: #108dc7;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.logo > h2 {
    margin: 4px 0;
}
    .navBar {
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: .5rem;
        /*border: 1px solid blue;*/
        background-color: black;
    }
    .navBar button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .5rem;
        height: 2rem;
        width: auto;
        cursor: pointer;
        background: dimgrey;
        color: black;
        border: 1px solid dimgrey;
        border-radius: 4px;
        font-family: 'Permanent Marker', cursive;
        font-size: 16px;
    }
    .navBar button:hover {
        border: 1px solid black;
        color: black;
        background: #108dc7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
    .navBar button:focus {
        outline: 0 !important;
        border: 1px solid black;
        color: black;
        background: #108dc7; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ef8e38, #108dc7); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .navBar button i {
        padding-left: 3px;
    }

</style>
