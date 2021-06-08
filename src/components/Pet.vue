<template>
  <h1>{{ pet_name }}</h1>

  <p>{{ $store.state.pet_desc }}</p>

  <i :class="setPetClass(pet_name)"></i>  
</template>

<script>
export default {
  data: function() {
    return {
      pet_name: this.$route.params.pet_name
    };
  },
  methods: {
    setPetClass: function(petName){      
      return "fas fa-" + petName + " pets-large-icon";
    }
  },
  beforeRouteUpdate(to, from, next) {    
    this.pet_name = to.params.pet_name;    
    next();
  }
  
};
</script>
