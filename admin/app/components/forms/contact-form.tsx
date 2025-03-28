import { CompanyForm } from '~/app/components/forms/company-form'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { FormLayout, InputField, RadioEnumField, SelectField, TextareaField } from '~/lib/form'
import { Component, Field, StaticRender, useField } from '@contember/interface'
import { TextareaAutosize } from '~/lib/ui/textarea'
import { Divider } from '~/lib/ui/divider'
import { MailIcon, PhoneIcon, UserIcon } from 'lucide-react'

export interface ContactFormProps {
	over?: 'company' | (string & {})
}

// Custom RadioEnumField with styled tag-like labels
const StyledRadioEnumField = Component(
	({ field, defaultValue }: any) => {
		const fieldValue = useField(field).value

		return (
			<RadioEnumField
				field={field}
				label=""
				defaultValue={defaultValue}
				orientation="horizontal"
				options={{
					potentialClient: (
						<div
							className={`px-3 py-1.5 rounded-md inline-flex items-center cursor-pointer transition-colors ${fieldValue === 'potentialClient' ? 'bg-sky-200 text-sky-900 font-semibold border border-sky-200' : 'bg-white text-sky-700 border border-sky-200 hover:bg-sky-50'}`}
						>
							Potential client
						</div>
					),
					client: (
						<div
							className={`px-3 py-1.5 rounded-md inline-flex items-center cursor-pointer transition-colors ${fieldValue === 'client' ? 'bg-lime-300 text-lime-900 font-semibold border border-lime-200' : 'bg-white text-lime-700 border border-lime-300 hover:bg-lime-50'}`}
						>
							Client
						</div>
					),
					vipClient: (
						<div
							className={`px-3 py-1.5 rounded-md inline-flex items-center cursor-pointer transition-colors ${fieldValue === 'vipClient' ? 'bg-amber-200 text-amber-900 border border-amber-200 font-semibold' : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'}`}
						>
							VIP Client
						</div>
					),
				}}
				inputProps={{
					className: 'hidden',
				}}
			/>
		)
	},
	({ field, defaultValue }) => <Field field={field} defaultValue={defaultValue} />,
)

export const ContactForm = Component(({ over }: ContactFormProps) => (
	<>
		<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Contact Details</h1>
			</div>

			<FormLayout>
				<div className="px-6 pt-5 pb-2 mt-2">
					<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
						<UserIcon className="w-4 h-4" />
						Personal Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<InputField field="firstName" label="First name" required />
						<InputField field="lastName" label="Last name" required />

						<div className="relative">
							<div className="absolute left-3 top-8 text-gray-500 z-10">
								<MailIcon className="h-5 w-5" />
							</div>
							<InputField
								field="email"
								label="Email"
								required
								inputProps={{
									className: 'pl-10 w-full',
								}}
							/>
						</div>

						<div className="relative">
							<div className="absolute left-3 top-8 text-gray-500 z-10">
								<PhoneIcon className="h-5 w-5" />
							</div>
							<InputField
								field="phone"
								label="Phone"
								inputProps={{
									className: 'pl-10 w-full',
								}}
							/>
						</div>
					</div>
				</div>


				<div className="px-6 py-2">
					<h2 className="text-md font-bold text-gray-700 mb-2 mt-6">Classification</h2>
					<StyledRadioEnumField field="contactType" defaultValue="potentialClient" />
				</div>


				<div className="px-6 pt-2 pb-6 mt-7">
					<h2 className="text-md font-bold text-gray-700 mb-7">Additional Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
						<div className="flex flex-col gap-y-4">
							<TextareaField field="address" label="Address" />
							<TextareaField field="note" label="Note" />
						</div>
						<div className="flex flex-col gap-y-4">
							{over !== 'company' && (
								<SelectField field="company" label="Company" createNewForm={<CompanyForm over="contact" />}>
									<CompanyPreview />
								</SelectField>
							)}
							<InputField field="position" label="Position" />
						</div>
					</div>
				</div>
			</FormLayout>
		</div>
		<StaticRender>
			<RadioEnumField
				field="contactType"
				label="Contact type"
				defaultValue="potentialClient"
				orientation="horizontal"
				options={{
					potentialClient: 'Potential client',
					client: 'Client',
					vipClient: 'VIP Client',
				}}
			/>
		</StaticRender>
	</>
))
