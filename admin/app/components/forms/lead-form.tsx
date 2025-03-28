import { Component, Field, HasOne, If, useEntity } from '@contember/interface'
import { CompanyForm } from '~/app/components/forms/company-form'
import { ContactForm } from '~/app/components/forms/contact-form'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { ContactsPreview } from '~/app/components/previews/contacts-preview'
import { CountryPreview } from '~/app/components/previews/country-preview'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import { FormLayout, InputField, MultiSelectField, SelectEnumField, SelectField, TextareaField, CheckboxField } from '~/lib/form'
import { Divider } from '~/lib/ui/divider'
import { RegionPreview } from '../previews/region-preview'
import { PersistButton } from '~/lib/binding'
import { DollarSignIcon, BarChart3Icon, CalendarIcon, BuildingIcon, UsersIcon, ClipboardListIcon } from 'lucide-react'

export const LeadForm = Component<{ isCreating?: boolean }>(({ isCreating = false }) => (
	<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl  border overflow-hidden pb-4">
		<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
			<h1 className="text-xl font-bold text-primary-darker">Deal Information</h1>
		</div>

		<FormLayout>
			<div className="px-6 pt-5 pb-2 mt-2">
				<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
					<BuildingIcon className="w-4 h-4" />
					Core Deal Information
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<InputField field="name" label="Deal Name" required />
					<SelectField field="company" label="Company" createNewForm={<CompanyForm over="company" />} required>
						<CompanyPreview />
					</SelectField>
					<SelectField field="responsibleEmployee" label="Deal Owner" required>
						<EmployeePreview />
					</SelectField>
					<SelectEnumField field="status" label="Status / Stage" defaultValue="lead" required />
					<div className="flex gap-4 items-center">
						<InputField field="amount" label="Deal Value" defaultValue={0} required />
						<SelectEnumField field="currency" label="Currency" required />
					</div>
					<InputField field="closeDate" label="Expected Close Date" />
				</div>
			</div>

			<If condition={accessor => !isCreating}>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<UsersIcon className="w-4 h-4" />
						Contacts & Timeline
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<MultiSelectField field="contacts" label="Contact Persons" createNewForm={<ContactForm over="contacts" />}>
							<ContactsPreview />
						</MultiSelectField>
						<div className="col-span-1 md:col-span-2">
							<h3 className="font-medium text-gray-700 mb-2 flex items-center gap-1.5">
								<CalendarIcon className="w-4 h-4" />
								Timeline & Next Actions
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<InputField field="lastContactDate" label="Last Contact Date" inputProps={{ type: 'date' }} />
								<InputField field="nextActionDate" label="Next Action Date" inputProps={{ type: 'date' }} />
								<InputField field="nextActionNotes" label="Next Action Notes" />
							</div>
						</div>
					</div>
				</div>
			</If>

			<If condition={accessor => isCreating}>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<ClipboardListIcon className="w-4 h-4" />
						Essential Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<SelectEnumField field="source" label="Lead Source" />
						<SelectEnumField field="salesQualificationScore" label="Sales Qualification Score" />
						<InputField field="nextActionDate" label="Next Action Date" inputProps={{ type: 'date' }} />
					</div>
				</div>

				<div className="px-6 pt-4 pb-2">
					<PersistButton label="Create deal" />
				</div>
			</If>

			<If condition={accessor => !isCreating}>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<BarChart3Icon className="w-4 h-4" />
						Qualification Details
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<SelectEnumField field="serviceType" label="Service Type / Offering" />
						<InputField field="projectScopeSummary" label="Project Scope Summary" />
						<InputField field="budgetEstimate" label="Client Budget Estimate" inputProps={{ type: 'number' }} />
						<SelectEnumField field="projectUrgency" label="Timeline / Urgency" />
						<CheckboxField field="decisionMakerIdentified" label="Decision Maker Identified?" />
						<SelectEnumField field="salesQualificationScore" label="Sales Qualification Score" />
					</div>
				</div>

				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<DollarSignIcon className="w-4 h-4" />
						Proposal & Negotiation
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<CheckboxField field="proposalSent" label="Proposal Sent?" />
						<InputField field="proposalLink" label="Proposal Link or Doc" />
						<CheckboxField field="contractSent" label="Contract Sent?" />
						<InputField field="contractSignedDate" label="Contract Signed Date" inputProps={{ type: 'date' }} />
					</div>
				</div>

				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<ClipboardListIcon className="w-4 h-4" />
						Source & Tags
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<SelectEnumField field="source" label="Lead Source" />
						<InputField field="referrer" label="Referrer (if any)" />
						<InputField field="marketingCampaign" label="Marketing Campaign" />
						<InputField field="industry" label="Industry" />
						<SelectEnumField field="priority" label="Priority" />
						<CheckboxField field="isStrategic" label="Strategic Deal?" />
					</div>
				</div>
			</If>
		</FormLayout>
	</div>
))

export const CountryAndRegionSelection = Component(
	() => {
		const entity = useEntity()
		const selectedCountryId = entity.getEntity('country').getField<string>('id').value

		return (
			<>
				<SelectField field="country" label="Country">
					<CountryPreview />
				</SelectField>
				{selectedCountryId && (
					<SelectField field="region" label="Region" options={`Region[country.id = '${selectedCountryId}']`}>
						<RegionPreview />
					</SelectField>
				)}
			</>
		)
	},
	() => (
		<>
			<HasOne field="country">
				<Field field="name" />
			</HasOne>
			<HasOne field="region">
				<Field field="name" />
			</HasOne>
		</>
	),
)
