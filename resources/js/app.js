/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./my');
require('./bootstrap');
require('./chart-js-config');
require('./spur');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('sidebar-component', require('./components/SidebarComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('edit-button-component', require('./components/EditButtonComponent.vue').default);
Vue.component('delete-button-component', require('./components/DeleteButtonComponent.vue').default);
Vue.component('success-message-component', require('./components/SuccessMessageComponent').default);
Vue.component('error-message-component', require('./components/ErrorMessageComponent').default);
Vue.component('info-message-component', require('./components/InfoMessageComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
