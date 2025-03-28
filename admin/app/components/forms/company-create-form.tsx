import { ContactForm } from '~/app/components/forms/contact-form'
import { ContactPreview } from '~/app/components/previews/contact-preview'
import { FormLayout, InputField, MultiSelectField, SelectField, TextareaField } from '~/lib/form'
import { Component, Field } from '@contember/interface'
import { BuildingIcon, GlobeIcon } from 'lucide-react'
import { Divider } from '~/lib/ui/divider'

export interface CompanyCreateFormProps {
	over?: 'contact' | 'companyLogo' | 'companies' | (string & {})
}

export const CompanyCreateForm = Component(({ over }: CompanyCreateFormProps) => (
	<>
		<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Company Details</h1>
			</div>

			<FormLayout>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<BuildingIcon className="w-4 h-4" />
						Basic Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<InputField field="name" label="Name" required />
						<InputField field="industry" label="Industry" required />
						<InputField field="identificationNumber" label="Identification number" />
						<InputField field="vatNumber" label="VAT" />
					</div>
				</div>

				<div className="px-6 pt-2 pb-6 mt-7">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<GlobeIcon className="w-4 h-4" />
						Location & Contact
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<div className="flex flex-col gap-y-4">
							<SelectField field="country" label="Country">
								<Field field="name" />
							</SelectField>
							<TextareaField field="address" label="Address" />
						</div>
						<div className="flex flex-col gap-y-4">
							<InputField field="website" label="Website" />
							{over !== 'contact' && (
								<MultiSelectField field="contacts" label="Contacts" createNewForm={<ContactForm over="company" />}>
									<ContactPreview />
								</MultiSelectField>
							)}
						</div>
					</div>
				</div>
			</FormLayout>
		</div>
	</>
)) 