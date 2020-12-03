<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet">
    <img src="./assets/logo.png" width="250" alt="logo" id="logo">
    <Main />
    <div id="caption">このアプリはブラウザの機能のみで動作するため、<br>画像がサーバにアップロードされることはありません。<br> This app works on only your browser then it will not upload the chosen image uploaded to any servers.</div>
    <footer id="copyright">Gakubuchi v1.0, Created by <a href="https://twitter.com/VienosNotes">@VienosNotes</a>, <a href="https://github.com/VienosNotes/Gakubuchi">Documents in Github</a> </footer>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Oswald:wght@300&display=swap')

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color Gray
  font-family 'Oswald', sans-serif


#logo-highlight
  color Orange

#copyright
  margin 10px
  font-size small
  color darkgray

  @media screen and (max-width: 1500px)
    font-size x-small


#copyright a
  color gray

#caption
  color darkgray
  font-size small
  @media screen and (max-width: 1500px)
      font-size x-small

#logo
  margin 10px
</style>
