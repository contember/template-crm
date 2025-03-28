import { BranchPreview } from '~/app/components/previews/branch-preview'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { MetaPreview } from '~/app/components/previews/meta-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, Field, HasMany, HasOne } from '@contember/interface'

export const ImageDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Url
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="url" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Width
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="width" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Height
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="height" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Alt
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="alt" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Meta
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="meta">
						<MetaPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Company logo
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="companyLogo">
						<CompanyPreview />
					</HasMany>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Branch logo
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="branchLogo">
						<BranchPreview />
					</HasMany>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
