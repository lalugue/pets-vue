<template>
  <h1>Pets</h1>
  <p>A small site for my favorite pets</p>

  <router-link :to="{ name: 'pet', params: { pet_name: 'dog' } }">
    <i class="orange fas fa-dog pets-large-icon grow"></i>
  </router-link>

  <router-link :to="{ name: 'pet', params: { pet_name: 'cat' } }">
    <i class="fas fa-cat pets-large-icon grow"></i>
  </router-link>
  <router-link :to="{ name: 'pet', params: { pet_name: 'fish' } }">
    <i class="fas fa-fish pets-large-icon grow"></i>
  </router-link>
</template>

<script>
export default {
  watch: {
    $route(to) {
      this.$store.commit('setPetDesc', to.params.pet_name);    
      this.pet_name = to.params.pet_name;     
    }
  }  
};
</script>