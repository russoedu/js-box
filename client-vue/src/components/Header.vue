<template>
  <header class="navbar navbar-expand">
        <a class="navbar-brand" href="/">
          <img id="logo" height="75px" src="/img/JS-box.svg" alt="JS Dock logo" />
          <span class="title">JS Box {process.env.REACT_APP_CLIENT} - {process.env.REACT_APP_ENVIRONMENT}</span>
        </a>
      </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
