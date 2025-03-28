import { Component, Field, FieldProps } from '@contember/interface'

export type EnumFieldProps =
    & FieldProps
    & {
    	options: Record<string, string>
    }

export const EnumField = Component<EnumFieldProps>(({ options, ...props }) => {
	return <Field {...props} format={(value: string | null) => {
		if (!value) {
			return '-'
		}
		return options[value] || value
	}} />
})
