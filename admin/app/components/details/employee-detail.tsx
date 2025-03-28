import { DetailButton } from '~/app/components/buttons/detail-button'
import { LeadColumns } from '~/app/components/columns/lead-columns'
import { ImageFieldView } from '~/app/components/field-views/image-field-view'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import { DataGridActionColumn, DataGridQueryFilter, DefaultDataGrid } from '~/lib/datagrid'
import { Component, Field, HasMany, HasOne, If } from '@contember/interface'
import { BriefcaseIcon, MailIcon, PhoneIcon, UserRound, Users2Icon } from 'lucide-react'
import { Divider } from '~/lib/ui/divider'

export const EmployeeDetail = Component(() => (
	<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
		<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
			<h1 className="text-xl font-bold text-primary-darker">Employee Details</h1>
		</div>

		<div className="px-6 pt-5 pb-2 mt-2">
			<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
				<UserRound className="w-4 h-4" />
				Personal Information
			</h2>

			<div className="flex items-start gap-6 mb-6">
				<div className="flex-shrink-0">
					<If condition="[profilePicture.image.url!=null]">
						<ImageFieldView field="profilePicture.image.url" className="h-28 w-28 object-cover rounded-full border" width={300} height={300} />
					</If>
					<If condition="[profilePicture.image.url=null]">
						<div className="h-28 w-28 object-contain border rounded-full p-1 bg-gray-100 flex items-center justify-around ">
							<UserRound className="h-10 w-10 text-gray-500" />
						</div>
					</If>
				</div>

				<div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
					<div className="flex flex-col">
						<span className="text-sm text-gray-500">Full name</span>
						<span className="font-medium">
							<Field field="firstName" /> <Field field="lastName" />
						</span>
					</div>

					<div className="flex flex-col">
						<span className="text-sm text-gray-500">Email</span>
						<span className="font-medium flex items-center gap-2">
							<MailIcon className="h-5 w-5 text-gray-500" />
							<Field
								field="email"
								format={email => (
									<a href={`mailto:${email}`} className="text-primary-darker underline">
										{email as string}
									</a>
								)}
							/>
						</span>
					</div>

					<div className="flex flex-col">
						<span className="text-sm text-gray-500">Phone</span>
						<span className="font-medium flex items-center gap-1.5">
							<PhoneIcon className="h-5 w-5 text-gray-500" />
							<Field 
								field="phone"
								format={phone => (
									<a href={`tel:${phone}`} className="text-primary-darker underline">
										{phone as string}
									</a>
								)}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>

		<Divider className="mx-6" />

		<div className="px-6 pt-5 pb-2">
			<h2 className="text-md font-bold text-gray-700 mb-7 flex items-center gap-1.5">
				<Users2Icon className="w-4 h-4" />
				Reporting Structure
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
				<div className="flex flex-col">
					<span className="text-sm text-gray-500 mb-1">Supervisor</span>
					<HasOne field="supervisor">
						<If condition="[id!=null]">
							<div className="border rounded-md p-2 bg-gray-50">
								<EmployeePreview />
							</div>
						</If>
						<If condition="[id=null]">
							<span className="text-gray-400 italic">No supervisor assigned</span>
						</If>
					</HasOne>
				</div>

				<div className="flex flex-col">
					<span className="text-sm text-gray-500 mb-1">Subordinates</span>
					<div className="flex flex-col gap-2">
						<HasMany field="subordinates" orderBy="lastName">
							<div className="border rounded-md p-2 bg-gray-50">
								<EmployeePreview />
							</div>
						</HasMany>
					</div>
				</div>
			</div>
		</div>

		<Divider className="mx-6 my-4" />

		<div className="px-6 pt-3 pb-2">
			<h2 className="text-md font-bold text-gray-700 mb-4 flex items-center gap-1.5">
				<BriefcaseIcon className="w-4 h-4" />
				Deal Flow
			</h2>

			<DefaultDataGrid entities="Lead[responsibleEmployee.personId=$personId]" toolbar={<DataGridQueryFilter />}>
				<DataGridActionColumn>
					<DetailButton to="leadDetail(id: $entity.id)" />
				</DataGridActionColumn>
				<LeadColumns />
			</DefaultDataGrid>
		</div>
	</div>
))
