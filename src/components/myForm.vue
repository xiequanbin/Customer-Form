<template>
  <div id="myForm" @dragover="allowDrop($event)" @drop="drop()">
    <el-form ref="form" label-position="top" class="form">
      <div v-for="(item,index) in list" @click="getDate(item,index)" :key="index" :class="{current:current === item}">
        <div
          class="item"
          draggable="true"
          @dragstart="setNewDate(item,false)"
          
          v-if="item.type !== 'header'"
          @dragover="allowDrop($event,index)"
          @drop.stop="drop(index)"
        >
          <el-form-item :required="item.required">
            <span slot="label" class="item-title">{{item.name}}</span>
            <el-input
              v-if="item.type === 'input'"
              v-model="item.value"
              :placeholder="item.placeholder"
            ></el-input>
            <el-select
              v-model="item.value"
              v-else-if="item.type === 'select'"
              :placeholder="item.placeholder"
            >
              <el-option v-for="(o,i) in item.option" :key="i" :value="o" :label="o.label"></el-option>
            </el-select>
            <el-radio-group v-else-if="item.type === 'radio'" v-model="item.value">
              <el-radio v-for="(o,i) in item.option" :key="i" :label="o">{{o.label}}</el-radio>
            </el-radio-group>
            <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="item.value">
              <el-checkbox v-for="(o,i) in item.option" :key="i" :label="o">{{o.label}}</el-checkbox>
            </el-checkbox-group>
            <el-time-picker
              v-else-if="item.type === 'timePicker'"
              v-model="item.value"
              :placeholder="item.placeholder"
            ></el-time-picker>
            <el-date-picker
              v-else-if="item.type === 'datePicker'"
              v-model="item.value"
              type="date"
              :placeholder="item.placeholder"
            ></el-date-picker>
          </el-form-item>
          <div v-if="current === item" class="operation">
            <i class="el-icon-delete" @click.stop="deleteItem(index)"></i>
            <i class="el-icon-document-copy" @click.stop="copyItem(index)"></i>
          </div>
        </div>
        <div @dragover="allowDrop($event,1)"
          @drop.stop="drop(1)" class="title" v-else>{{item.value || item.placeholder}}</div>
      </div>
      <div class="form-bottom">
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [
        {
          name: "表头",
          type: "header",
          value: "表头",
          placeholder: "请输入表头",
          required: false
        }
      ],
      newDate: null,
      current: null,
      isAdd: true
    };
  },
  mounted() {
    this.$bus.$on("dragstart", this.setNewDate);
    this.$bus.$on("setDate", this.setDate);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    copyItem(i){
      this.isAdd = true
      this.newDate = JSON.parse(JSON.stringify(this.list[i]))
      this.drop(i + 1)
    },
    deleteItem(i){
      this.current = null;
      this.$bus.$emit("getDate", null, null);
      this.list.splice(i, 1);
    },
    dragstart() {
      this.isAdd = false;
    },
    setDate(item, index) {
      this.list[index] = item;
    },
    getDate(item, index) {
      this.current = item;
      this.$bus.$emit("getDate", item, index);
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drop(index = null) {
      if (!this.isAdd) {
        let index = this.list.indexOf(this.newDate);
        this.deleteItem(index)
      }

      if (index === null) {
        index = this.list.length;
      }
      this.list.splice(index, 0, this.newDate);
    },
    setNewDate(i, isAdd = true) {
      this.isAdd = isAdd;
      this.newDate = i;
    }
  }
};
</script>

<style scoped>
#myForm {
  width: 100%;
  height: 100%;
  margin-bottom: 150px;
}
.form{
  min-height: 700px;
  position: relative;
}
.form-bottom{
  position: absolute;
  bottom: -100px;
  left: 0px;
  right: 0px;
  text-align: center;
}
.title{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
.item {
  padding: 10px;
  cursor: grab;
  position: relative;
}
.operation{
  position: absolute;
  bottom: 0px;
  right: 100px;
  transform: translate(0,50%);
}
.operation > i{
  padding: 5px;
  background: white;
  border:1px solid #eee;
  cursor: pointer;
  z-index: 99;
}
.item-title {
  line-height: 25px;
  padding: 0px;
}
.current {
  background: #f7f7f7;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>
