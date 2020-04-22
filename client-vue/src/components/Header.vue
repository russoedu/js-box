<template>
  <header class="navbar navbar-expand">
        <a class="navbar-brand" href="/">
          <img id="logo" height="75px" src="/img/JS-box.svg" alt="JS Box logo" />
          <span class="title">JS Box  {{client}} - {{environment}}</span>
        </a>
      </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      client: process.env.VUE_APP_CLIENT,
      environment: process.env.VUE_APP_ENVIRONMENT
    }
  }
}
</script>
