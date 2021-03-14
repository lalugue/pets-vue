<template>
  <h1>{{pet_name}}</h1>

      <p>Dogs are loyal. They like to sniff stuff.</p>

      <i class="fas fa-dog pets-large-icon"></i>
</template>

<script>
export default {
  data: function() {
    return {
      pet_name: this.$route.params.pet_name
    };
  }
};
</script>
