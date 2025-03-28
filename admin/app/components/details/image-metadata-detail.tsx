import { ImagePreview } from '~/app/components/previews/image-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const ImageMetadataDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Image
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="image">
						<ImagePreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					File name
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="fileName" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Last modified
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="lastModified" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					File size
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="fileSize" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					File type
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="fileType" />
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
