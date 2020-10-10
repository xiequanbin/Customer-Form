<template>
  <div class="contents">
    <div class="component" v-for="(item) in list" :key="item.title">
      <div class="component-title">{{item.title}}</div>
      <span draggable="true" @dragstart="dragstart(o)"  v-for="(o,i) in item.list" :key="i">
        <div v-if="!o.hidden" class="component-item">
          {{o.name}}
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import general from '../assets/typeList/general'
export default {
  name: "",
  data() {
    return {
      list: [
        {
          title: "通用字段",
          list: {
            ...general
          }
        }
      ]
    };
  },
  methods:{
      dragstart(o){
          this.$bus.$emit('dragstart',o.data())
      }
  }
};
</script>

<style scoped >
    .contents{
        background: #FAFAFA;
        height: 100%;
    }
    .component{
        font-size: 13px;
        padding-bottom: 10px;
    }
    .component-title{
        padding-bottom: 5px;
    }
    .component-item{
        cursor: grab;
        font-size: 12px;
        display: inline-block;
        padding: 5px;
        width: 125px;
        height: 18px;
        line-height: 18px;
        border: 1px solid #eee;
        margin: 0px 5px 5px 0px;
    }
</style>
