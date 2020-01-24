
Vue.use(Vuetify)

const routes = [
    { path: '/', component: Home },
]
const router = new VueRouter({
    routes // short for `routes: routes`
})
new Vue({
    el: "#app",
    vuetify:new Vuetify(),
    router
})