import { ProfilePictureFieldView } from '~/app/components/field-views/profile-picture-field-view'
import { Component, Field, Link } from '@contember/interface'

export const EmployeePreview = Component(() => (
	// <Link to="employeeDetail(personId: $entity.personId)">
	// 	<a>
	<div className="flex items-center gap-2 truncate">
		<ProfilePictureFieldView urlField="profilePicture.image.url" />
		<div>
			<Field field="firstName" /> <Field field="lastName" />
			{' - '}
			<Field field="email" />
		</div>
	</div>
	// 	</a>
	// </Link>
))
