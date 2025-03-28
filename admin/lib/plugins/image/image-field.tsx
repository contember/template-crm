import { Component } from '@contember/interface'
import { ImageField as DefaultImageField } from '~/lib/form'

export const ImageField = Component<{ baseField: string; label?: string }>(props => {
	return (
		<DefaultImageField
			label={props.label}
			baseField={props.baseField}
			urlField="url"
			widthField="width"
			heightField="height"
			fileNameField="meta.fileName"
			fileTypeField="meta.fileType"
			fileSizeField="meta.fileSize"
			lastModifiedField="meta.lastModified"
		/>
	)
})
