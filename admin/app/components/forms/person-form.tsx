import { BranchPreview } from '~/app/components/previews/branch-preview'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import { FormLayout, InputField, SelectField } from '~/lib/form'
import { ImageField } from '~/lib/plugins/image/image-field'
import { PersonInviteForm } from '~/lib/plugins/person/invite-form'
import { Divider } from '~/lib/ui/divider'
import { Component, Field, HasOne, useField } from '@contember/interface'
import { BuildingIcon, PhoneIcon, UserIcon } from 'lucide-react'

export interface EmployeeFormProps {
	over?: 'supervisor' | 'subordinates' | 'responsibleEmployee' | (string & {})
}

export const PersonForm = Component(
	({ over }: EmployeeFormProps) => {
		const thisPersonPersonId = useField<string>('personId').value

		return (
			<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
				<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
					<h1 className="text-xl font-bold text-primary-darker">Person Details</h1>
				</div>

				<FormLayout>
					<div className="px-6 pt-5 pb-2 mt-2">
						<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
							<UserIcon className="w-4 h-4" />
							Personal Information
						</h2>
						
						<PersonInviteForm />
						
						<div className="relative mt-4">
							<div className="absolute left-3 top-8 text-gray-500 z-10">
								<PhoneIcon className="h-5 w-5" />
							</div>
							<InputField 
								field="phone" 
								label="Phone" 
								required 
								inputProps={{
									className: 'pl-10 w-full',
								}}
							/>
						</div>
						
						<div className="mt-4">
							<ImageField label="Profile picture" baseField="profilePicture.image" />
						</div>
					</div>
					
					<div className="px-6 pt-5 pb-2 mt-4">
						<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
							<BuildingIcon className="w-4 h-4" />
							Organization Details
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
							<SelectField field="branch" label="Branch">
								<BranchPreview />
							</SelectField>
							<SelectField 
								field="supervisor" 
								label="Supervisor" 
								options={thisPersonPersonId ? `Person[personId!='${thisPersonPersonId}']` : 'Person'}
							>
								<EmployeePreview />
							</SelectField>
						</div>
					</div>
				</FormLayout>
			</div>
		)
	},
	() => (
		<>
			<PersonInviteForm />
			<ImageField label="Logo" baseField="profilePicture.image" />
			<Field field="phone" />
			<HasOne field="branch">
				<BranchPreview />
			</HasOne>
			<HasOne field="supervisor">
				<EmployeePreview />
			</HasOne>
		</>
	),
)
