import { ProfilePictureFieldView } from '~/app/components/field-views/profile-picture-field-view'
import { BranchPreview } from '~/app/components/previews/branch-preview'
import { DataGridColumn, DataGridHasOneColumn, DataGridTextColumn } from '~/lib/datagrid'
import { Component } from '@contember/interface'

export const PersonColumns = Component(() => (
	<>
		<DataGridColumn>
			<ProfilePictureFieldView urlField="profilePicture.image.url" />
		</DataGridColumn>
		<DataGridTextColumn field="firstName" header="First name" format={value => <strong>{value}</strong>} />
		<DataGridTextColumn field="lastName" header="Last name" format={value => <strong>{value}</strong>} />
		<DataGridHasOneColumn field="branch" header="Branch">
			<BranchPreview />
		</DataGridHasOneColumn>
		<DataGridTextColumn
			field="email"
			header="Email"
			format={value => (
				<a href={`mailto:${value}`} className="text-primary-darker underline">
					{value}
				</a>
			)}
		/>
		<DataGridTextColumn
			field="phone"
			header="Phone"
			format={value => (
				<a href={`tel:${value}`} className="text-primary-darker underline">
					{value}
				</a>
			)}
		/>
	</>
))
