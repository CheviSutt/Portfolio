import Vue from 'vue';
import Router from 'vue-router';
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";

Vue.use(Router);

export default new Router ({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    },
        {
            path: '/about',
            name: 'About',
            component: AboutPage,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage,
        }],
});
