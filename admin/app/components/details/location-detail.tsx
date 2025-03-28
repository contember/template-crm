import { BranchPreview } from '~/app/components/previews/branch-preview'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { DealsPreview } from '~/app/components/previews/deals-preview'
import { LeadsPreview } from '~/app/components/previews/leads-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, Field, HasMany, HasOne } from '@contember/interface'

export const LocationDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Companies
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="companies">
						<CompanyPreview />
					</HasMany>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Branch
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="branch">
						<BranchPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Country
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="country" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Region
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="region" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					District
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="district" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					City
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="city" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Deals
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="deals">
						<DealsPreview />
					</HasMany>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Leads
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="leads">
						<LeadsPreview />
					</HasMany>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
