import { Component, Field } from '@contember/interface'

export const BranchPreview = Component(() => (
	<div>
		<Field field="name" />
		{' - '}
		<Field field="country.name" />
	</div>
))
