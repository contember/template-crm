import type { ContemberClientEntities } from '@app/client'
import { createContext } from '@contember/react-utils'
import type { ReactNode } from 'react'

export type FieldLabelFormatter = (entityName: string, fieldName: string) => ReactNode | null

export type FieldLabels = {
	[E in keyof ContemberClientEntities]?: {
		[F in (keyof ContemberClientEntities[E]['columns']) | (keyof ContemberClientEntities[E]['hasOne']) | (keyof ContemberClientEntities[E]['hasMany'])]?: ReactNode
	}
}

export const [, useFieldLabelFormatter, FieldLabelFormatterProvider] = createContext<FieldLabelFormatter>('FieldLabelContext', (entityName, fieldName) => null)

