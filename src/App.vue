<template>
  <div id="app">
    <div id="nav">
      <router-link to="/weekly-menus">Weekly Menu</router-link> |
      <router-link to="/dishes">Dishes</router-link> |
      <router-link to="/leftovers">Leftovers</router-link> |
      <router-link to="/pantry">Pantry</router-link> |
      <router-link to="/shopping">Shopping</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
