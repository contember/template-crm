import { Component, FieldView } from '@contember/interface'
import { ReactNode } from 'react'

export const UrlFieldView = Component(({ field, children }: { field: string; children: ReactNode }) => {
	return (
		<FieldView<string>
			fields={[field]}
			render={({ value: url }) => {
				if (url) {
					return (
						<a href={`${url}`} target="_blank">
							{children}
						</a>
					)
				}
			}}
		/>
	)
})
