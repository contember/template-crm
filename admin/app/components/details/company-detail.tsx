import { DetailButton, EditButton } from '~/app/components/buttons/detail-button'
import { LeadColumns } from '~/app/components/columns/lead-columns'
import { UrlFieldView } from '~/app/components/field-views/url-field-view'
import { ContactsPreview } from '~/app/components/previews/contacts-preview'
import { DataGridActionColumn, DataGridQueryFilter, DefaultDataGrid } from '~/lib/datagrid'
import { PropertyItem } from '~/lib/ui/property-list'
import { Component, Field, HasMany, HasOne } from '@contember/interface'
import { BuildingIcon, GlobeIcon, MapPinIcon, TagIcon, UsersIcon } from 'lucide-react'

export const CompanyDetail = Component(() => (
	<div className="flex flex-col gap-12">
		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-8 mt-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Company Detail</h1>
			</div>

			<div className="px-6 pt-5 pb-2 mt-2">
				<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
					<BuildingIcon className="w-4 h-4" />
					Company Information
				</h2>

				<div className="grid grid-cols-2 gap-x-4">
					<div className="grid grid-cols-1 md:grid-cols-[110px_0.8fr] gap-x-4">
						<PropertyItem label="Name">
							<div className="flex items-center gap-2 font-semibold">
								<Field field="name" />
							</div>
						</PropertyItem>

						<PropertyItem label="Industry">
							<div className="flex items-center gap-2">
								<Field field="industry" />
							</div>
						</PropertyItem>

						<PropertyItem label="ID Number">
							<div className="flex items-center gap-2">
								<Field field="identificationNumber" />
							</div>
						</PropertyItem>

						<PropertyItem label="VAT">
							<Field field="vatNumber" />
						</PropertyItem>
					</div>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-[110px_0.8fr] gap-x-4">
							<PropertyItem label="Country">
								<HasOne field="country">
									<Field field="name" />
								</HasOne>
							</PropertyItem>

							<PropertyItem label="Address">
								<div className="flex items-center gap-2">
									<MapPinIcon className="h-5 w-5 text-primary-darker" />
									<Field field="address" />
								</div>
							</PropertyItem>

							<PropertyItem label="Website">
								<div className="flex items-center gap-2">
									<GlobeIcon className="h-5 w-5 text-primary-darker" />
									<UrlFieldView field="website">
										<span className="text-sky-900 underline">Visit website</span>
									</UrlFieldView>
								</div>
							</PropertyItem>
						</div>
					</div>
				</div>
			</div>

			<div className="px-6 pt-5 pb-2">
				<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
					<UsersIcon className="w-4 h-4" />
					Contact Information
				</h2>

				<PropertyItem label="Contacts">
					<HasMany field="contacts">
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-1">
								<DetailButton to="contactDetail(id: $entity.id)" />
								<EditButton to="contactEdit(id: $entity.id)" />
							</div>
							<ContactsPreview />
						</div>
					</HasMany>
				</PropertyItem>
			</div>
		</div>

		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<div className="text-xl font-bold text-primary-darker">Deal Flow</div>
			</div>

			<div className="p-4">
				<DefaultDataGrid entities="Lead[company.id=$id]" toolbar={<DataGridQueryFilter />}>
					<DataGridActionColumn>
						<DetailButton to="dealDetail(id: $entity.id)" />
					</DataGridActionColumn>
					<LeadColumns />
				</DefaultDataGrid>
			</div>
		</div>
	</div>
))
