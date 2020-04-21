<template>
  <div class="list">
    <img alt="Vue logo" src="../assets/logo.png">
    <List msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>
