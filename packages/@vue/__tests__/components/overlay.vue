<!-- eslint-disable vue/no-dupe-keys -->
<script lang="ts">
import { defineComponent } from 'vue-demi'
import { useDisclosure } from '../../src'

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 0,
    },
    title: String,
  },
  emits: ['confirm', 'cancel', 'update:visible'],
  setup: (props) => {
    const { confirm, cancel, vanish, visible } = useDisclosure({
      duration: props.duration,
    })
    return { confirm, cancel, vanish, visible }
  },
})
</script>

<template>
  <!-- after-leave call vanish -->
  <transition name="fade" @after-leave="vanish()">
    <div v-show="visible" class="base-modal__mask">
      <div class="base-modal__content">
        <div class="base-modal__title">
          {{ title || 'Title' }}
        </div>
        <slot />
        <div class="base-modal__control">
          <span class="modal__confirm" @click="confirm('confirm')">confirm</span>
          <span class="modal__cancel" @click="cancel('cancel')">cancel</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.base-modal__mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.base-modal__content {
  position: absolute;
  border-radius: 20px;
  width: 600px;
  height: 300px;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
.base-modal__control {
  position: absolute;
  right: 0;
  bottom: 20px;
  span {
    margin-right: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-top,
.fade-leave-from {
  opacity: 1;
}
</style>
