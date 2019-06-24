<template>
  <div id="app">
    <div>
      <h2>Only Single String with default word limits 1</h2>
      <readMore :moreString="moreWords"></readMore>
    </div>
    <div>
      <h2>String with words limit</h2>
      <code><readMore wordsLimit=10 :moreString="moreWords"></readMore></code>
    </div>
    <div>
      <h2> Greater and Lesser String</h2>
      <code><readMore :lessString="lessWords" :moreString="moreWords"></readMore></code>
    </div>
    <div>
      <h2> Read more to a link</h2>
      <code><readMore link="https://www.google.com" :lessString="lessWords" :moreString="moreWords"></readMore></code>
    </div>
    <div>
      <h2> Read more to a link with a target</h2>
      <code><readMore link="https://www.google.com" target="_blank" :lessString="lessWords" :moreString="moreWords"></readMore></code>
    </div>
    <div>
      <h2> Read more with content styling and link styling</h2>
      <code><readMore contentClass="cotentStyling" linkClass="linkClass" link="https://www.google.com" target="_blank" :lessString="lessWords" :moreString="moreWords"></readMore></code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      lessWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras. Sagittis aliquam malesuada bibendum arcu vitae. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Aliquam etiam erat velit scelerisque in dictum. Morbi blandit cursus risus at ultrices. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Posuere urna nec tincidunt praesent semper feugiat. Lacus luctus accumsan tortor posuere. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Rhoncus urna neque viverra justo.',
      moreWords: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero volutpat sed cras. Sagittis aliquam malesuada bibendum arcu vitae. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Aliquam etiam erat velit scelerisque in dictum. Morbi blandit cursus risus at ultrices. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quis eleifend quam adipiscing vitae proin sagittis nisl. Posuere urna nec tincidunt praesent semper feugiat. Lacus luctus accumsan tortor posuere. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Rhoncus urna neque viverra justo. Eu consequat ac felis donec et odio pellentesque. Tincidunt arcu non sodales neque sodales ut etiam. Tellus at urna condimentum mattis. Enim sit amet venenatis urna cursus eget nunc scelerisque. Sed velit dignissim sodales ut eu sem integer vitae justo. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla.'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.linkClass {
  color: darkred;
  font-weight: 700;
  font-size: 16px;
  text-decoration: underline;
}
.cotentStyling {
  color: brown;
  font-style: italic !important;
  line-height: 1.2;
  text-align: left;
}
</style>
