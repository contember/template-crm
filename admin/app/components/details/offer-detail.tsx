import { DealsPreview } from '~/app/components/previews/deals-preview'
import { LeadsPreview } from '~/app/components/previews/leads-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const OfferDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Description
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="description" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Price
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="price" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Valid until
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="validUntil" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Deal flow
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="lead">
						<LeadsPreview />
					</HasOne>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
