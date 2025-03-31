import { Component, Field } from '@contember/interface'
import { leadStatusOptions, leadStatusColorHex } from '~/utils/enums'
import { EnumField } from './fields/enum-field'

export const StatusBadge = Component(() => (
	<Field
		field="status"
		format={(status: string | null) => {
			if (!status || typeof status !== 'string') {
				return (
					<div className="px-3 py-1 rounded-full inline-block bg-gray-200 text-gray-600">
						<EnumField field="status" options={leadStatusOptions} />
					</div>
				)
			}

			const backgroundColor = `${leadStatusColorHex[status]}20`
			const textColor = leadStatusColorHex[status]

			return (
				<div className="px-3 py-1 rounded-full inline-block" style={{ backgroundColor, color: textColor }}>
					<EnumField field="status" options={leadStatusOptions} />
				</div>
			)
		}}
	/>
))
