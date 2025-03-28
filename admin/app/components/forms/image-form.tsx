import { BranchForm } from '~/app/components/forms/branch-form'
import { CompanyForm } from '~/app/components/forms/company-form'
import { ImageMetadataForm } from '~/app/components/forms/image-metadata-form'
import { MetaPreview } from '~/app/components/previews/meta-preview'
import { FormLayout, InputField, SelectField } from '~/lib/form'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '~/lib/repeater'
import { Component } from '@contember/interface'

export interface ImageFormProps { over?: 'image' | 'logo' | (string & {}) }

export const ImageForm = Component(({ over } : ImageFormProps) => <FormLayout>
	<InputField field="url" label="Url" required />
	<InputField field="width" label="Width" required />
	<InputField field="height" label="Height" required />
	<InputField field="alt" label="Alt" required />
	{over !== 'image' && <SelectField field="meta" label="Meta" createNewForm={<ImageMetadataForm over="meta" />}>
	<MetaPreview />
</SelectField>
}
	{over !== 'logo' && <DefaultRepeater field="companyLogo" title="Company logo" orderBy="createdAt">
	<RepeaterItemActions>
		<RepeaterRemoveItemButton />
	</RepeaterItemActions>
	<CompanyForm over="companyLogo" />
</DefaultRepeater>
}
	{over !== 'logo' && <DefaultRepeater field="branchLogo" title="Branch logo" orderBy="createdAt">
	<RepeaterItemActions>
		<RepeaterRemoveItemButton />
	</RepeaterItemActions>
	<BranchForm over="branchLogo" />
</DefaultRepeater>
}
</FormLayout>)
