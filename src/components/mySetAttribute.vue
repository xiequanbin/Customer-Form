<template>
  <div class="contents">
    <div v-if="current">
      <div>{{current.name}}</div>
      <div v-if="current.attribute">
        <div v-for="(o,i) in current.attribute" :key="i">
          <div>{{i}}</div>
          <el-input v-model="data[o]" size="mini"></el-input>
        </div>
      </div>
      <div class="posi-re" v-if="data.option && data.option.length">
        <div>选项</div>
        <el-radio-group v-if="singleChoice" v-model="data.value">
          <div class="option-item" v-for="(o,i) in data.option" :key="i">
            <el-radio :label="o">
              <el-input v-model="data.option[i].label" size="mini"></el-input>
            </el-radio>
            <i
              class="el-icon-delete delete"
              :class="{disable:data.option.length === 1}"
              @click="delOption(i)"
            ></i>
          </div>
        </el-radio-group>
        <el-checkbox-group v-else v-model="data.value">
          <div class="option-item" v-for="(o,i) in data.option" :key="i">
            <el-checkbox :key="i" :label="o">
              <el-input v-model="data.option[i].label" size="mini"></el-input>
            </el-checkbox>
            <i
              class="el-icon-delete delete"
              :class="{disable:data.option.length === 1}"
              @click="delOption(i)"
            ></i>
          </div>
        </el-checkbox-group>
        <el-button size="mini" class="addOption" @click="addOption">添加项</el-button>
      </div>
      <div v-if="!current.hidden">
        <div>校验</div>
        <el-checkbox v-model="data.required">必须填</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import general from "../assets/typeList/general";
export default {
  name: "",
  data() {
    return {
      data: null,
      index: 0,
      type: {
        ...general
      }
    };
  },
  mounted() {
    this.$bus.$on("getDate", this.getDate);
  },
  watch: {
    data(newval) {
      if (newval) {
        this.$bus.$emit("setDate", newval, this.index);
      }
    }
  },
  methods: {
    delOption(i) {
      if (this.data.option.length !== 1) {
        this.data.option.splice(i, 1);
        let index = this.data.value.indexOf(this.data.option[i]);
        if (index !== -1) {
          this.data.value.splice(index, 1);
        }
      }
    },
    getDate(data, index) {
      this.data = data;
      this.index = index;
    },
    addOption() {
      this.data.option.push({
        label: `选项${this.data.option.length + 1}`,
        value: `${this.data.option.length + 1}`
      });
    }
  },
  computed: {
    current() {
      return this.data ? this.type[this.data.type] : null;
    },
    singleChoice() {
      if (!this.data) return false;
      return ["radio", "select"].includes(this.data.type);
    }
  }
};
</script>

<style scoped>
.contents {
  background: #fafafa;
  height: 100%;
  padding: 10px;
}
.posi-re {
  position: relative;
}
.posi-ab {
  position: absolute;
}
.delete {
  cursor: pointer;
  font-size: 14px;
}
.disable {
  cursor: no-drop;
}
.addOption {
  margin-top: 10px;
}
.option-item {
  margin-bottom: 5px;
}
</style>
