import { createApp } from "vue";
import App from "./App.vue";
import Pet from "./components/Pet.vue";
import AllPets from "./components/AllPets.vue";
import {createStore} from "vuex";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/style.css";

//Vue.config.productionTip = false

//routes
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/pets-vue",
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
    pet_desc: ""
  },
  mutations: {
    setPetDesc (state, petName) {
      let newPetDesc = "";
      switch(petName){
        case "dog":
          newPetDesc = "Dogs are loyal. They like to sniff stuff.";
          break;
        case "cat":
          newPetDesc = "Cats are charming. They like to explore when no one is looking.";
          break;
        case "fish":
          newPetDesc = "Fish are swimmy. They like to swim all day.";
          break;
        default:
          newPetDesc = "All pets are adorable";
      }
      state.pet_desc = newPetDesc;
    }
  }
})

const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
