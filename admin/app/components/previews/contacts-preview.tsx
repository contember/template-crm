import { Component, Field, Link } from '@contember/interface'

export const ContactsPreview = Component(() => (
	// <div>
	// 	<Link to="contactDetail(id: $entity.id)">
	<div>
		<Field field="firstName" /> <Field field="lastName" />
		{' - '}
		<Field field="email" />
	</div>
	// 	</Link>
	// </div>
))
