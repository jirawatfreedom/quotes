<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/directive">Directive</router-link> |
      <router-link to="/filters-mixins">FiltersMixins</router-link> |
      <router-link to="/animations">Animations</router-link> |
      <router-link to="/monster-slayer">Monster</router-link> |
      <router-link to="/firebase">Firebase</router-link> |
      <router-link to="/router">Router</router-link> |
      <router-link to="/my-vuex">My Vuex</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
