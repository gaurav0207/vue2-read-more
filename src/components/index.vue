<template>
  <div v-if="moreString !== ''">
    <div v-if="showLess">
      <p :class="[contentClass, 'content___syling']">
        <span v-if="lessString" v-html="lessString"></span>
        <span v-else  v-html="getTruncate(moreString, wordsLimit)"></span>
        <span v-if="moreString !== null && moreString.length > lessString.length"
          @click="switchLess(false)"
          :class="[linkClass, 'anchorTagStyling']"
          :target="target ? target: ''"
        >read more
        </span>
      </p>
    </div>
    <div v-else>
      <p v-if="moreString"
        :class="[contentClass, 'content___syling']"
      >
        <span v-html="moreString"></span>
        <span v-if="(lessString !== null && moreString.length > lessString.length) || lessString === null"
          @click="switchLess(true)"
          :class="[linkClass, 'anchorTagStyling']"
          :target="target ? target: ''"
        >read less
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    },
    'lessString': {
      type: String,
      default: '',
      required: false
    },
    'moreString': {
      type: String,
      default: ''
    },
    'contentClass': {
      type: String,
      default: 'content-class'
    },
    'linkClass': {
      type: String,
      default: 'primaryColor'
    },
    'target': {
      type: String,
      default: ''
    },
    'wordsLimit': {
      type: [Number, String],
      default: 5
    }
  },
  data () {
    return {
      showLess: true
    }
  },
  methods: {
    switchLess (val) {
      if (!val && this.target !== '' && this.link !== '') {
        window.open(this.link, this.target)
      } else if (!val && this.link !== '#') {
        window.location.href = this.link
      } 
      else {
        this.showLess = val
      }
    },
    getTruncate(val, till) {
      if (val) {
        let temp = val.split(' ').splice(0, till).join(' ') + '...'
        return temp
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="css">
  .primaryColor {
    color: blue;
    cursor: pointer;
  }
  .content___syling {
    word-break: break-word;
  }
  .content___syling p:first-child {
    margin-bottom: 0px !important;
  }
  .anchorTagStyling {
    cursor: pointer;
  }
</style>
