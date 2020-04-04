<template>
  <div>
    <p>Mintbean Editor 2020-04-04 Bryce McMath</p>
    <select name="langs" id="langs">
      <option v-for="(opt, i) in langOpts" :key="i" :value="opt">{{opt}}</option>
    </select>

    <editor
      v-model="content"
      @init="editorInit"
      :lang="lang"
      theme="chrome"
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
      langOpts: ['css', 'html'],
      lang: 'css',
    };
  },
  methods: {
    editorInit: function() {
      require('brace/ext/language_tools'); //language extension prerequsite...
      require('brace/mode/html');
      require('brace/mode/javascript'); //language
      require('brace/mode/less');
      require('brace/theme/chrome');
      require('brace/snippets/javascript'); //snippet
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
