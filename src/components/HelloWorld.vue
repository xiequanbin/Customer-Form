<template>
  <div class="hello">
    <div class="left">
      <components></components>
    </div>
    <div class="content">
      <myForm></myForm>
    </div>
    <div class="right">
      <mySetAttribute></mySetAttribute>
    </div>
  </div>
</template>

<script>
import components from './myComponents.vue'
import myForm from './myForm.vue'
import mySetAttribute from './mySetAttribute.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
    components,
    myForm,
    mySetAttribute
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.left {
  position: absolute;
  left: 0;
  top: 0;
  width: 285px;
  padding: 5px;
  overflow-y: auto;
  height: 100%;
}
.content{
  width: 1100px;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
}
.right{
  position: absolute;
  top: 0;
  right: 0;
  width: 285px;
  padding: 5px;
  height: 100%;
  overflow-y: auto;
}
</style>
