<template>
	<title>Pets - Home</title>

  <body>
    <div class="bs-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="{ name: 'home'}"> 
        <a class="navbar-brand">Pets</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto"> 
            <li class="nav-item">  
              <router-link :to="{ name: 'pet', params: { pet_name: 'dog' }}">             
              <a class="nav-link">Dogs</a>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="cat.html">Cats</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fish</a>
            </li>                    
          </ul>                  
        </div>
      </nav> 
    </div>        

    <div class="container">
      <h1>
        Pets
      </h1>
      <p>A small site for my favorite pets</p>
   

     
      <router-view>
     
         </router-view>  
      </div>
      </body>

       

      <footer class="footer">      
        Check out my other stuff at <a href="https://github.com/lalugue">Github</a> - Theme from <a href="https://bootswatch.com/">Bootswatch</a>      
      </footer>	  

     
   
</template>

<script>
//import AllPets from "./components/AllPets.vue"

export default {
  name: 'App',
  components: {
    //AllPets
  }
}
</script>

<style>
  @import "assets/styles/bootstrap.min.css";
  @import "assets/styles/style.css";
</style>
