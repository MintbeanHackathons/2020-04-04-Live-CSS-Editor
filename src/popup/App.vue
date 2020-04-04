<template>
  <div v-bind:class="['popup', {'popup--dark': dark}]">
    <h2 class="popup__header">Mintbean Editor 2020-04-04 Bryce McMath</h2>
    <select class="popup__select" name="langs" id="langs">
      <option v-for="(opt, i) in langOpts" :key="i" :value="opt">{{opt}}</option>
    </select>

    <editor
      class="popup__editor"
      v-model="content"
      @init="editorInit"
      :lang="lang"
      :theme="dark ? 'twilight': 'chrome' "
      width="500"
      height="100"
    ></editor>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  components: {
    editor: require('vue2-ace-editor'),
  },
  data() {
    return {
      content: '',
      langOpts: ['css'],
      lang: 'css',
    };
  },
  computed: {
    dark() {
      // Check if they prefer dark mode
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
  },
  methods: {
    editorInit() {
      // Not all of these are currently needed but I figured I might get to them eventually
      require('brace/ext/language_tools'); //language extension prerequsite...
      require('brace/mode/html');
      require('brace/mode/css');
      require('brace/mode/javascript'); //language
      require('brace/mode/scss');
      require('brace/theme/chrome');
      require('brace/theme/twilight');
      require('brace/snippets/javascript'); //snippet
    },
  },
  watch: {
    content: function(val) {
      // Get an array of the only tab that is open and active
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        // Add content as CSS to that tab
        chrome.tabs.insertCSS(tabs[0].id, { code: val });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  &__header {
    font-weight: 300;
    margin: 1vh 1vw;
  }

  &__editor {
    margin: 1vh 1vw;
    margin-top: 1vh;
  }

  &__select {
    margin: 1vh 1vw;
    margin: 2vh 0;
  }

  &--dark {
    margin: 1vh 1vw;
    background: #222;

    .popup__header {
      margin: 1vh 1vw;
      color: #f3f3f3;
    }

    .popup__select {
      margin: 1vh 1vw;
      background: #333;
      color: #f3f3f3;
    }
  }
}
</style>
