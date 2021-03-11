<template>
	<title>Pets - Home</title>

  <body>
    <div class="bs-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="home.html">Pets</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">                    
            <li class="nav-item">
              <a class="nav-link">Dogs</a>
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

      <router-link :to="{ name: 'pet', params: { pet_name: 'dog' }}">        
         <i class="orange fas fa-dog pets-large-icon grow"></i>        
      </router-link>
      <a href="cat.html">
        <i class="fas fa-cat pets-large-icon grow"></i>
      </a>
      <a href="fish.html">
        <i class="fas fa-fish pets-large-icon grow"></i>
      </a>	  
      </div>  
      </body>

      <footer class="footer">      
        Check out my other stuff at <a href="https://github.com/lalugue">Github</a> - Theme from <a href="https://bootswatch.com/">Bootswatch</a>      
      </footer>	  

      <router-view></router-view>
   
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import "assets/styles/bootstrap.min.css";
@import "assets/styles/style.css";
</style>
