import type { Field } from 'payload'

export const createIconPickerField = (config?: {
  name?: string
  label?: string
  required?: boolean
}): Field => ({
  name: config?.name || 'icon',
  type: 'text',
  label: config?.label || 'Icon',
  required: config?.required || false,
  admin: {
    components: {
      Field: '@/fields/IconPickerSimple#IconPickerComponent',
    },
  },
})
