import { EnumColorField } from '~/app/components/fields/enum-color-field'
import { BranchPreview } from '~/app/components/previews/branch-preview'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import {
	DataGridDateColumn,
	DataGridEnumColumn,
	DataGridHasOneColumn,
	DataGridNumberColumn,
	DataGridTextColumn,
} from '~/lib/datagrid'
import { Component, Field } from '@contember/interface'
import { leadStatusColorHex, leadStatusOptions } from '../../../utils/enums'
import { dateFormat, priceCurrencyFormat } from '../../../utils/format'

export const LeadColumns = Component(() => (
	<>
		<DataGridDateColumn field="createdAt" header="Created" format={dateFormat} />
		<DataGridTextColumn field="name" header="Name" />
		<DataGridNumberColumn field="amount" header="Amount" format={priceCurrencyFormat} />
		<DataGridHasOneColumn field="company" header="Company">
			<Field field="name" />
		</DataGridHasOneColumn>
		<DataGridEnumColumn field="status" header="Status" options={leadStatusOptions}>
			<EnumColorField field="status" options={leadStatusOptions} colorOptions={leadStatusColorHex} />
		</DataGridEnumColumn>
		<DataGridHasOneColumn field="responsibleEmployee" header="Responsible employee">
			<EmployeePreview />
		</DataGridHasOneColumn>
		<DataGridHasOneColumn field="responsibleEmployee.branch" header="Branch">
			<BranchPreview />
		</DataGridHasOneColumn>
	</>
))
