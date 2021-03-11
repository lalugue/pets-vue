<template>
<p>Pet is {{pet_name}}</p>
</template>

<script>
export default {

  data: function(){
    return{
      pet_name: this.$route.params.pet_name
    }
  } 
}
</script>