import type { ContemberClientEnums } from '@app/client'
import { createContext } from '@contember/react-utils'
import type { ReactNode } from 'react'

export type EnumOptionsFormatter = (enumName: string) => Record<string, ReactNode>

export const [, useEnumOptionsFormatter, EnumOptionsFormatterProvider] = createContext<EnumOptionsFormatter>('EnumOptionsFormatterContext', enumName => {
	throw new Error('EnumOptionsFormatterProvider is not provided')
})

export type EnumLabels = {
	[E in keyof ContemberClientEnums]?: {
		[K in ContemberClientEnums[E]]?: string
	}
}
