<template>
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
