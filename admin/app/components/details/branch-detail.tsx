import { PropertyItem, PropertyList } from '~/lib/ui/property-list'
import { Component, Field } from '@contember/interface'
import { BuildingIcon, MapPinIcon, GlobeIcon, MapIcon } from 'lucide-react'

export const BranchDetail = Component(() => (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
		<div className="flex items-start gap-2">
			<BuildingIcon className="w-5 h-5 text-gray-500 mt-0.5" />
			<div className="flex flex-col">
				<span className="text-sm font-medium text-gray-500">Branch name</span>
				<span className="text-base font-semibold"><Field field="name" /></span>
			</div>
		</div>
		
		<div className="flex items-start gap-2">
			<GlobeIcon className="w-5 h-5 text-gray-500 mt-0.5" />
			<div className="flex flex-col">
				<span className="text-sm font-medium text-gray-500">Country</span>
				<span className="text-base font-semibold"><Field field="country.name" /></span>
			</div>
		</div>
		
		<div className="flex items-start gap-2">
			<MapIcon className="w-5 h-5 text-gray-500 mt-0.5" />
			<div className="flex flex-col">
				<span className="text-sm font-medium text-gray-500">Region</span>
				<span className="text-base font-semibold"><Field field="region" /></span>
			</div>
		</div>
		
		<div className="flex items-start gap-2">
			<MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5" />
			<div className="flex flex-col">
				<span className="text-sm font-medium text-gray-500">City</span>
				<span className="text-base font-semibold"><Field field="city" /></span>
			</div>
		</div>
	</div>
))
