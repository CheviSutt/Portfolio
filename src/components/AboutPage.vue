<template>
    <div class="container">
        <h1>{{ author }}</h1>
        <h3>{{ title }}:</h3>
        <p>Lorem ipsum dolor amet tousled woke cardigan yr. Four loko pug la croix gluten-free hella. Enamel pin mixtape lumbersexual, franzen raw denim bushwick disrupt jianbing hot chicken leggings YOLO pug sartorial williamsburg. Tote bag fanny pack scenester cliche aesthetic, enamel pin skateboard kickstarter beard cold-pressed cray keytar.

            Mixtape four loko tacos, street art blog letterpress bespoke roof party cronut artisan literally cloud bread organic. Truffaut knausgaard cloud bread cronut, poutine lyft unicorn. Tousled leggings schlitz, portland yr woke cred. Chambray brooklyn meggings fanny pack, schlitz artisan sustainable stumptown fingerstache single-origin coffee tbh knausgaard.</p>
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
.container{
    /*height: 100%;*/
    /*width: 100%;*/
    /*background-color: gainsboro;*/
    height: 90%;
    width: 100%;
    background-image: url("../assets/about.jpg");
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
