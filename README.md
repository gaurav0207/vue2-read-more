# `vue2-read-more`

This package provides an easy and flexible way to handle long descriptions and paragraphs.

<!-- Click here to see [DEMO](https://github.com/gaurav0207/vue2-read-more/dist/index.html) -->

## Installation

~~~~ 
npm install --save vue2-read-more
~~~~
Also, add this in your main.js file
~~~~
import Vue from 'vue'
import readMore from 'vue2-read-more'
Vue.use(readMore)
~~~~

## Features
* Add Read more with default string length (word limit: 5)
    ~~~~
      <readMore moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></readMore>
    ~~~~
* Add Read more with user defined word limit
    ~~~~
    <readMore wordsLimit=10 moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></readMore>
    ~~~~
* Add strings for both `Read more` with `Read less`
    ~~~~
    <readMore lessString="Lorem Ipsum has been" moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></readMore>
    ~~~~
* Add read more with  `link`
    ~~~~
    <readMore link="https://www.google.com" moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
    ~~~~
* Add Read more with `link` and `target`
    ~~~~
    <readMore link="https://www.google.com" target="_blank" moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
    ~~~~
* Add styling to content and links (`contentStyling` and `linkClass` is class name in props)
    ~~~~
    <readMore contentClass="cotentStyling" linkClass="linkClass" link="https://www.google.com" target="_blank" : moreString="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></readMore>
    ~~~~
* #### `Allows HTML Strings`