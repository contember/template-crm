import { CompanyForm } from '~/app/components/forms/company-form'
import { LocationForm } from '~/app/components/forms/location-form'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { LocationPreview } from '~/app/components/previews/location-preview'
import { FormLayout, InputField, SelectField } from '~/lib/form'
import { ImageField } from '~/lib/plugins/image/image-field'
import { Component, Field } from '@contember/interface'
import { BuildingIcon, MapPinIcon, GlobeIcon, MapIcon } from 'lucide-react'

export interface BranchFormProps {
	over?: 'branches' | 'branch' | 'branchLogo' | (string & {})
}

export const BranchForm = Component(({ over }: BranchFormProps) => (
	<FormLayout>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
			<div className="relative">
				<div className="absolute left-3 top-8 text-gray-500 z-10">
					<BuildingIcon className="h-5 w-5" />
				</div>
				<InputField 
					field="name" 
					label="Name" 
					required 
					inputProps={{
						className: 'pl-10 w-full',
					}}
				/>
			</div>

			<div className="relative">
				
				<SelectField 
					field="country" 
					label="Country"
				>
					<Field field="name" />
				</SelectField>
			</div>

			<div className="relative">
				<div className="absolute left-3 top-8 text-gray-500 z-10">
					<MapIcon className="h-5 w-5" />
				</div>
				<InputField 
					field="region" 
					label="Region" 
					inputProps={{
						className: 'pl-10 w-full',
					}}
				/>
			</div>

			<div className="relative">
				<div className="absolute left-3 top-8 text-gray-500 z-10">
					<MapPinIcon className="h-5 w-5" />
				</div>
				<InputField 
					field="city" 
					label="City" 
					inputProps={{
						className: 'pl-10 w-full',
					}}
				/>
			</div>
		</div>
		{/*<ImageField label="Logo" baseField="logo" />*/}
	</FormLayout>
))
