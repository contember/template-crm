import { CompanyPreview } from '~/app/components/previews/company-preview'
import { DataGridHasOneColumn, DataGridTextColumn } from '~/lib/datagrid'
import { Component } from '@contember/interface'
import { MailIcon, PhoneIcon } from 'lucide-react'

export const CellsContact = Component(() => (
	<>
		<DataGridTextColumn field="firstName" header="First name" format={value => <strong>{value as string}</strong>} />
		<DataGridTextColumn field="lastName" header="Last name" format={value => <strong>{value as string}</strong>} />
		<DataGridTextColumn
			field="email"
			header="Email"
			format={value => (
				<a href={`mailto:${value}`} className="text-sky-900 flex items-center gap-2">
					<MailIcon className="w-4 h-4" />
					{value as string}
				</a>
			)}
		/>
		<DataGridTextColumn
			field="phone"
			header="Phone"
			format={value => (
				<a href={`tel:${value}`} className="text-sky-900 flex items-center gap-2">
					<PhoneIcon className="w-4 h-4" />
					{value as string}
				</a>
			)}
		/>
		<DataGridHasOneColumn field="company" header="Company">
			<CompanyPreview />
		</DataGridHasOneColumn>
	</>
))
