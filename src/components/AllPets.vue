<template>
<router-link :to="{ name: 'pet', params: { pet_name: 'dog' }}">        
         <i class="orange fas fa-dog pets-large-icon grow"></i>        
      </router-link>
      
      <a href="cat.html">
        <i class="fas fa-cat pets-large-icon grow"></i>
      </a>
      <a href="fish.html">
        <i class="fas fa-fish pets-large-icon grow"></i>
      </a>	  
      
</template>