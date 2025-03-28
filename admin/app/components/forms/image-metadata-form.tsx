import { ImageForm } from '~/app/components/forms/image-form'
import { ImagePreview } from '~/app/components/previews/image-preview'
import { FormLayout, InputField, SelectField } from '~/lib/form'
import { Component } from '@contember/interface'

export interface ImageMetadataFormProps { over?: 'meta' | (string & {}) }

export const ImageMetadataForm = Component(({ over } : ImageMetadataFormProps) => <FormLayout>
	{over !== 'meta' && <SelectField field="image" label="Image" createNewForm={<ImageForm over="image" />}>
	<ImagePreview />
</SelectField>
}
	<InputField field="fileName" label="File name" required />
	<InputField field="lastModified" label="Last modified" required />
	<InputField field="fileSize" label="File size" required />
	<InputField field="fileType" label="File type" required />
</FormLayout>)
