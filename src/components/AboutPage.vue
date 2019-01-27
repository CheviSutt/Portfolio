<template>
    <div class="containerAbout">
        <div class="card">
            <div class="header">
                <h4>{{ title }}</h4>
                <h3>{{ description }}</h3>
            </div>
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
            title: '-Yep, Chevi. Like the truck, except with an "i" not a "y".',
            description:'"I’ve discovered a passion for Web Development during a rewarding career as a Dental Lab Technician.'
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
    width: 94%;
    height: 90%;
    border: 1px solid blue;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    flex-direction: column;
    background-color: rgba(238,238,238,0.3);
}

.header {
    border: 2px solid red;
    /*height: 10%;*/
    width: 80%;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    flex-direction: column;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    background-color: rgba(238,238,238,0.5);
}

.header h4 {
    display: flex;
    justify-content: flex-start;
}

.main {
    border: 2px solid yellow;
    height: 30%;
    width: 80%;
}

.footer {
    border: 2px solid green;
    height: 10%;
    width: 80%;
}
</style>
