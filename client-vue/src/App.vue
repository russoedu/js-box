<template>
  <div id="app">
    <Header/>
    <div class="container">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
