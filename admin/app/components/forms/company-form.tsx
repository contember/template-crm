import { ContactForm } from '~/app/components/forms/contact-form'
import { ContactPreview } from '~/app/components/previews/contact-preview'
import { FormLayout, InputField, MultiSelectField, SelectField, TextareaField } from '~/lib/form'
import { Component, Field } from '@contember/interface'
import { BuildingIcon, GlobeIcon, MapPinIcon } from 'lucide-react'

export interface CompanyFormProps {
	over?: 'contact' | 'companyLogo' | 'companies' | (string & {})
}

export const CompanyForm = Component(({ over }: CompanyFormProps) => (
	<>
		<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Company Details</h1>
			</div>

			<FormLayout>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<BuildingIcon className="w-4 h-4" />
						Company Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<InputField field="name" label="Name" required />
						<InputField field="industry" label="Industry" required />
					</div>
				</div>

				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						Registration Details
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<InputField field="identificationNumber" label="Identification number" />
						<InputField field="vatNumber" label="VAT" />
					</div>
				</div>

				<div className="px-6 pt-2 pb-6 mt-7">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<MapPinIcon className="w-4 h-4" />
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
							<div className="relative">
								<div className="absolute left-3 top-8 text-gray-500 z-10">
									<GlobeIcon className="h-5 w-5" />
								</div>
								<InputField
									field="website"
									label="Website"
									inputProps={{
										className: 'pl-10 w-full',
									}}
								/>
							</div>
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
