import type Vue from 'vue'
import type { PluginObject } from 'vue'
import { context } from './internal'

function install(_ins: any, parent: any) {
  if (parent)
    context.parent = parent
}

const unoverlay: PluginObject<Vue> = { install }

export { install }
export { Field } from './components'
export { useDisclosure } from './composable'
export type { UseDisclosureOptions } from './composable'
export { defineOverlay, renderOverlay } from './define'
export default unoverlay
