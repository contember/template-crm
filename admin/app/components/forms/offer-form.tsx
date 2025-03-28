import { Component } from '@contember/interface'
import { LeadForm } from '~/app/components/forms/lead-form'
import { LeadPreview } from '~/app/components/previews/lead-preview'
import { FormLayout, InputField, SelectField } from '~/lib/form'

export const OfferForm = Component(() => (
	<FormLayout>
		<InputField field="description" label="Description" required />
		<InputField field="price" label="Price" required />
		<InputField field="validUntil" label="Valid until" required />
		<SelectField field="lead" label="Lead" createNewForm={<LeadForm isCreating={true} />}>
			<LeadPreview />
		</SelectField>
	</FormLayout>
))
