<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "OrangeCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: { type: Object, validator },
    pc: { type: Object, validator },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    },
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
    colClass() {
      let { span, offset, ipad, pc } = this;
      let createClasses = this.createClasses
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(pc, "pc-"),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  // width: 50%;
  // height: 50px;
  // background: grey;
  // border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  //设置偏移量offset(margin-left)

  @media (min-width: 577px) {
    //设备宽度在577px~993px之间视为ipad
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 992px) {
    //设备宽度在993px之上视为PC屏幕
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>