<template>
  <h1>{{ pet_name }}</h1>

  <p>{{ $store.state.pet_desc }}</p>

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
