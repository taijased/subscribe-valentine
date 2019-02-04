<template lang="pug">
  #id
    Index
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>
<style lang="stylus">
body 
  margin 0
  padding 0
#app
  overflow: hidden;
	font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
input {
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:1;
}
input:focus
{
	outline:0;
}
input
{
	-webkit-box-sizing:content-box;
	-moz-box-sizing:content-box;
	box-sizing:content-box;
}

</style>
