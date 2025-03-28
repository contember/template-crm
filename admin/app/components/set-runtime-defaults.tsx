import { Component, Field, useEntity } from '@contember/interface'
import { useEffect } from 'react'

export const SetRuntimeDefaults = Component(
	(values: Record<string, any>) => {
		const entity = useEntity()
		useEffect(() => {
			for (const [field, value] of Object.entries(values)) {
				entity.getField(field).updateValue(value)
			}
		}, [values, entity])

		return null
	},
	(values: Record<string, any>) => {
		return (
			<>
				{Object.entries(values).map(([field, value]) => (
					<Field field={field} key={field} />
				))}
			</>
		)
	},
)
