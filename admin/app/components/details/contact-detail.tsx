import { DetailButton } from '~/app/components/buttons/detail-button'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { DataGridActionColumn, DataGridQueryFilter, DefaultDataGrid } from '~/lib/datagrid'
import { PropertyItem, PropertyList } from '~/lib/ui/property-list'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, Field, HasOne, If } from '@contember/interface'
import { LeadColumns } from '../columns/lead-columns'
import { MailIcon, PhoneIcon, UserIcon, BuildingIcon, MapPinIcon, TagIcon } from 'lucide-react'
import { Divider } from '~/lib/ui/divider'

export const ContactDetail = Component(() => (
	<div className="flex flex-col gap-12">
		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-8">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Contact Details</h1>
			</div>

			<div className="px-6 pt-5 pb-2 mt-2">
				<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
					<UserIcon className="w-4 h-4" />
					Personal Information
				</h2>

				<div className="grid grid-cols-2 gap-x-4">
					<div className="grid grid-cols-1 md:grid-cols-[60px_0.8fr] gap-x-4">
						<PropertyItem label="Name">
							<div className="flex items-center gap-2">
								<Field field="firstName" /> <Field field="lastName" />
							</div>
						</PropertyItem>

						<PropertyItem label="Email">
							<div className="flex items-center gap-2">
								<MailIcon className="h-5 w-5 text-primary-darker" />
								<Field
									field="email"
									format={value => (
										<a className="text-sky-900" href={`mailto:${value}`}>
											{value as string}
										</a>
									)}
								/>
							</div>
						</PropertyItem>

						<PropertyItem label="Phone">
							<div className="flex items-center gap-2">
								<PhoneIcon className="h-5 w-5 text-primary-darker" />
								<Field
									field="phone"
									format={value => (
										<a className="text-sky-900" href={`tel:${value}`}>
											{value as string}
										</a>
									)}
								/>
							</div>
						</PropertyItem>
						
						<PropertyItem label="Type">
							<div className="flex items-center gap-2">
								<Field 
									field="contactType"
									format={value => {
										const styles = {
											potentialClient: "bg-sky-200 text-sky-900 px-3 py-1 rounded-md inline-flex font-medium",
											client: "bg-lime-300 text-lime-900 px-3 py-1 rounded-md inline-flex font-medium",
											vipClient: "bg-amber-200 text-amber-900 px-3 py-1 rounded-md inline-flex font-bold"
										}
										const labels = {
											potentialClient: "Potential client",
											client: "Client",
											vipClient: "VIP Client"
										}
										return <span className={styles[value as keyof typeof styles]}>{labels[value as keyof typeof labels]}</span>
									}}
								/>
							</div>
						</PropertyItem>
					</div>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-[60px_0.8fr] gap-x-4">
							<PropertyItem label="Position">
								<Field field="position" />
							</PropertyItem>
							
							<PropertyItem label="Address">
								<div className="flex items-center gap-2">
									<MapPinIcon className="h-5 w-5 text-primary-darker" />
									<Field field="address" />
								</div>
							</PropertyItem>
						</div>
						<If condition="[note!=null]">
							<div className="my-6 text-left pr-16">
								<Field
									field="note"
									format={value => <span className="bg-yellow-50 py-3 px-4 text-sm rounded-md text-normal">{value as string}</span>}
								/>
							</div>
						</If>
					</div>
				</div>
			</div>
			<If condition="[company.id!=null]">
				<div className="px-6 pt-5 pb-2">
					<h2 className="text-md font-bold text-primary-darker mb-7 flex items-center gap-1.5">
						<BuildingIcon className="w-4 h-4" />
						Company Information
					</h2>

					<PropertyItem label="Company">
						<HasOne field="company">
							<CompanyPreview />
						</HasOne>
					</PropertyItem>
				</div>
			</If>
		</div>

		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<div className="text-xl font-bold text-primary-darker">Deal Flow</div>
			</div>

			<div className="p-4">
				<DefaultDataGrid entities="Lead[contacts.id=$id]" toolbar={<DataGridQueryFilter />}>
					<DataGridActionColumn>
						<DetailButton to="leadDetail(id: $entity.id)" />
					</DataGridActionColumn>
					<LeadColumns />
				</DefaultDataGrid>
			</div>
		</div>
	</div>
))
