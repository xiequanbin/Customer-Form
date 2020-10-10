export default {
  'header':{
    name: '表头',
    data: function () {
      return {
        name: "表头",
        type: "header",
        value: "表头",
        placeholder: "请输入表头",
        required:false
      };
    },
    hidden:true,
    attribute: {
      '默认值': 'value',
    }
  },
  'input': {
    name: '单行文字',
    data: function () {
      return {
        name: "未命名",
        type: "input",
        value: "",
        placeholder: "",
        required:false
      };
    },
    attribute: {
      '标题': 'name',
      '默认值': 'value',
      '占位符': 'placeholder'
    }
  },
  'select': {
    name: '下拉框',
    data: function () {
      return {
        name: "下拉框",
        type: "select",
        value: "",
        placeholder: "",
        option: [
          {
            label: '选择1',
            value: '1'
          },
          {
            label: '选择2',
            value: '2'
          }
        ],
        required:false
      };
    },
    attribute: {
      '标题': 'name',
      '占位符': 'placeholder'
    }
  },
  'radio': {
    name: '单项选择',
    data: function () {
      return {
        name: "单项选择",
        type: "radio",
        value: "",
        option: [
          {
            label: '选择1',
            value: '1'
          },
          {
            label: '选择2',
            value: '2'
          }
        ],
        required:false
      }
    },
    attribute: {
      '标题': 'name'
    }
  },
  'checkbox': {
    name: '多项选择',
    data: function () {
      return {
        name: "多项选择",
        type: "checkbox",
        value: [],
        option: [
          {
            label: '选择1',
            value: '1'
          },
          {
            label: '选择2',
            value: '2'
          }
        ],
        required:false
      }
    },
    attribute: {
      '标题': 'name'
    }
  },
  'timePicker': {
    name: '时间选择器',
    data: function () {
      return {
        name: "时间选择器",
        type: "timePicker",
        value: '',
        required:false
      }
    },
    attribute: {
      '标题': 'name',
      '占位符': 'placeholder'
    }
  },
  'datePicker': {
    name: '日期选择器',
    data: function () {
      return {
        name: "日期选择器",
        type: "datePicker",
        value: '',
        required:false
      }
    },
    attribute: {
      '标题': 'name',
      '占位符': 'placeholder'
    }
  },
}