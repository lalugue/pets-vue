<template>
  <title>Pets - Home</title>

  <body>
    <div class="bs-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link :to="{ name: 'home' }">
          <a class="navbar-brand">Pets</a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'pet', params: { pet_name: 'dog' } }">
                <a class="nav-link">Dogs</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'pet', params: { pet_name: 'cat' } }">
                <a class="nav-link">Cats</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'pet', params: { pet_name: 'fish' } }">
                <a class="nav-link">Fish</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container">
      <router-view> </router-view>
    </div>
  </body>

  <footer class="footer">
    Check out my other stuff at
    <a href="https://github.com/lalugue">Github</a> - Theme from
    <a href="https://bootswatch.com/">Bootswatch</a>
  </footer>
</template>

<script>
export default {
  name: "App",
};
</script>
