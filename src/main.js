import { createApp } from 'vue'
import App from './App.vue'
import AllPets from './components/AllPets.vue'


//Vue.config.productionTip = false

//routes
import Pet from './components/Pet.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllPets
    },
     {
      path: '/pet/:pet_name',
      name: 'pet',
      component: Pet           
    }    
  ]
})



const app = createApp(App)
app.use(router)

app.mount('#app')
