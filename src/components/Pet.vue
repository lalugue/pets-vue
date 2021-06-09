<template>
  <h1>{{ capitalizeName(pet_name) }}</h1>

  <p>{{ $store.state.pet_desc }}</p>

  <i :class="setPetClass(pet_name)"></i>
</template>

<script>
export default {
  data: function () {
    return {
      pet_name: this.$route.params.pet_name,
    };
  },
  methods: {
    capitalizeName: function(name){
      let firstLetter = name.charAt(0).toUpperCase();
      let restOfName = name.slice(1);
      return firstLetter + restOfName;
    },
    setPetClass: function (petName) {
      return "fas fa-" + petName + " pets-large-icon";
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.commit("setPetDesc", to.params.pet_name);
    this.pet_name = to.params.pet_name;
    next();
  },
};
</script>
