import { EnumField } from '~/app/components/fields/enum-field'
import { Component, FieldProps, useField } from '@contember/interface'
import { Field } from '@contember/react-binding'

export type EnumColorFieldProps = FieldProps & {
	options: Record<string, string>
	colorOptions: Record<string, string>
	type?: 'dot' | 'badge'
}

export const EnumColorField = Component(
	({ field, colorOptions, options, type }: EnumColorFieldProps) => {
		const colorValue = useField<string>(field).value
		const colorHex = colorValue && colorOptions[colorValue]
		const colorHexWithOpacity = `${colorHex}30`

		if (!colorHex) {
			return <EnumField field={field} options={options} />
		}

		if (type === 'dot' || !type) {
			return (
				<div className="flex items-center gap-1 truncate">
					<div className="rounded-lg bg-white w-3.5 h-3.5 min-w-3 border" style={{ backgroundColor: colorHex }} />
					<EnumField field={field} options={options} />
				</div>
			)
		}
		if (type === 'badge') {
			return (
				<div className="rounded-lg bg-white text-sm font-normal py-0.5 px-1" style={{ backgroundColor: colorHexWithOpacity, color: colorHex }}>
					<EnumField field={field} options={options} />
				</div>
			)
		}
	},
	({ field }) => <Field field={field} />,
)
