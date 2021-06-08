import { createApp } from "vue";
import App from "./App.vue";
import Pet from "./components/Pet.vue";
import AllPets from "./components/AllPets.vue";
import {createStore} from "vuex";

//Vue.config.productionTip = false

//routes
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllPets
    },
    {
      path: "/pet/:pet_name",
      name: "pet",
      component: Pet
    }
  ]
});

//Vuex
const store = createStore({
  state: {    
    pet_desc: 'Dogs are loyal. They like to sniff stuff.'
  },
  mutations: {
    setPetDesc (state, petName) {
      state.pet_desc = petName;
    }
  }
})

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
