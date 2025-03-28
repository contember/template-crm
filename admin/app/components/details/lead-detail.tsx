import { AddNoteButton } from '~/app/components/buttons/add-note-button'
import { DetailButton } from '~/app/components/buttons/detail-button'
import { NoteCard } from '~/app/components/cards/NoteCard'
import { EnumField } from '~/app/components/fields/enum-field'
import { BranchPreview } from '~/app/components/previews/branch-preview'
import { CompanyPreview } from '~/app/components/previews/company-preview'
import { ContactsPreview } from '~/app/components/previews/contacts-preview'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import { Binding, PersistButton } from '~/lib/binding'
import {
	DataGrid,
	DataGridActionColumn,
	DataGridLoader,
	DataGridPagination,
	DataGridQueryFilter,
	DataGridTable,
	DataGridToolbar,
} from '~/lib/datagrid'
import { DataGridNotes } from '~/lib/datagrid/note'
import { Button } from '~/lib/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '~/lib/ui/dialog'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { Component, EntitySubTree, Field, HasMany, HasOne, Link, RedirectOnPersist, If, useField } from '@contember/interface'
import { PlusIcon, FileTextIcon, UsersIcon, BarChartIcon, FileSignatureIcon, TagIcon, MapPinIcon, MessageSquareIcon, PencilIcon } from 'lucide-react'
import { leadSourceOptions, leadStatusOptions, leadStatusColorHex } from '../../../utils/enums'
import { priceCurrencyFormat } from '../../../utils/format'
import { FormLayout, InputField, MultiSelectField, SelectEnumField, SelectField, TextareaField, CheckboxField } from '~/lib/form'
import { CompanyForm } from '~/app/components/forms/company-form'
import { ContactForm } from '~/app/components/forms/contact-form'

// Define missing enum options based on the model
const serviceTypeOptions = {
	mvpBuild: 'MVP Build',
	uxAudit: 'UX Audit',
	staffAugmentation: 'Staff Augmentation',
	consulting: 'Consulting',
	maintenance: 'Maintenance',
	other: 'Other',
}

const salesQualificationScoreOptions = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
}

const priorityOptions = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
}

const projectUrgencyOptions = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
	critical: 'Critical',
}

// Status badge component with dynamic styling
const StatusBadge = () => (
	<Field
		field="status"
		format={(status: string | null) => {
			if (!status || typeof status !== 'string') {
				return (
					<div className="px-3 py-1 rounded-full inline-block bg-gray-200 text-gray-600">
						<EnumField field="status" options={leadStatusOptions} />
					</div>
				)
			}

			const backgroundColor = `${leadStatusColorHex[status]}20`
			const textColor = leadStatusColorHex[status]

			return (
				<div className="px-3 py-1 rounded-full inline-block" style={{ backgroundColor, color: textColor }}>
					<EnumField field="status" options={leadStatusOptions} />
				</div>
			)
		}}
	/>
)

export const LeadDetail = Component(() => (
	<div className="flex flex-col gap-12">
		{/* Header with key information */}
		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-6">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker">Deal Details</h1>
			</div>

			<div className="px-6 pt-6">
				<div className="flex justify-between items-end">
					<div className="flex flex-col">
						<h1 className="text-2xl font-bold">
							<Field field="name" />
						</h1>
						<div className="flex items-center mt-1 text-sm text-gray-600">
							<div className="mr-6">
								<span className="font-medium">Amount: </span>
								<span className="font-bold text-primary-darker">
									<Field field="amount" format={priceCurrencyFormat} />
									<span className="ml-1">
										<Field field="currency" format={value => <span className="uppercase">{(value as string).toLocaleString()}</span>} />
									</span>
								</span>
							</div>
							<div className="mr-6">
								<span className="font-medium">Stage: </span>
								<StatusBadge />
							</div>
							<div>
								<span className="font-medium">Close date: </span>
								<Field field="closeDate" />
							</div>
						</div>
					</div>
					<div>
						<HasOne field="responsibleEmployee">
							<div className="text-sm">
								<EmployeePreview />
							</div>
						</HasOne>
					</div>
				</div>
			</div>
		</div>

		{/* Tabbed interface */}
		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden">
			<div className="flex border-b">
				<TabButton id="overview" icon={<FileTextIcon size={16} />} label="Overview" defaultActive />
				<TabButton id="contacts" icon={<UsersIcon size={16} />} label="Contacts" />
				<TabButton id="qualification" icon={<BarChartIcon size={16} />} label="Qualification" />

				{/* Show proposal tab only for qualified and later stages */}
				<If condition="[status = 'qualified' || status = 'proposal' || status = 'negotiation' || status = 'contractSent' || status = 'won' || status = 'lost' || status = 'onHold']">
					<TabButton id="proposal" icon={<FileSignatureIcon size={16} />} label="Proposal" />
				</If>

				<TabButton id="tags" icon={<TagIcon size={16} />} label="Source & Tags" />
				<TabButton id="notes" icon={<MessageSquareIcon size={16} />} label="Notes" />
			</div>

			{/* Tab content */}
			<div className="px-6 py-6">
				{/* Overview Tab */}
				<TabContent id="overview">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div>
							<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
								<FileTextIcon className="w-4 h-4" />
								Core Deal Information
							</h2>
							<TableWrapper className="bg-white border rounded-md">
								<div className="flex items-center justify-end px-4 pt-2">
									<Dialog>
										<DialogTrigger asChild>
											<Button size="sm" variant="ghost">
												<PencilIcon size={14} className="mr-1" /> Edit
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>Edit Core Deal Information</DialogHeader>
											<FormLayout>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
													<InputField field="name" label="Deal Name" required />
													<SelectField field="company" label="Company" createNewForm={<CompanyForm over="company" />} required>
														<CompanyPreview />
													</SelectField>
													<SelectField field="responsibleEmployee" label="Deal Owner" required>
														<EmployeePreview />
													</SelectField>
													<SelectEnumField field="status" label="Status / Stage" required />
													<div className="flex gap-4 items-center">
														<InputField field="amount" label="Deal Value" required />
														<SelectEnumField field="currency" label="Currency" required />
													</div>
													<InputField field="closeDate" label="Expected Close Date" inputProps={{ type: 'date' }} />
												</div>
											</FormLayout>
											<DialogFooter>
												<DialogClose>
													<PersistButton label="Save changes" />
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</div>
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Name</TableCell>
											<TableCell className="font-semibold text-gray-800">
												<Field field="name" />
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Amount</TableCell>
											<TableCell className="font-semibold">
												<div className="text-2xl text-primary-darker">
													<Field field="amount" format={priceCurrencyFormat} />
													<span className="ml-1 text-sm text-primary-darker uppercase">
														<Field field="currency" />
													</span>
												</div>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Stage</TableCell>
											<TableCell className="font-semibold">
												<StatusBadge />
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Responsible employee</TableCell>
											<TableCell className="font-semibold">
												<HasOne field="responsibleEmployee">
													<EmployeePreview />
												</HasOne>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Branch</TableCell>
											<TableCell className="font-semibold">
												<HasOne field="responsibleEmployee">
													<HasOne field="branch">
														<BranchPreview />
													</HasOne>
												</HasOne>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Expected Close Date</TableCell>
											<TableCell className="font-semibold">
												<Field field="closeDate" />
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableWrapper>
						</div>

						<div>
							<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
								<BarChartIcon className="w-4 h-4" />
								Next Steps
							</h2>
							<TableWrapper className="bg-white border rounded-md">
								<div className="flex items-center justify-end px-4 pt-2">
									<Dialog>
										<DialogTrigger asChild>
											<Button size="sm" variant="ghost">
												<PencilIcon size={14} className="mr-1" /> Edit
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>Edit Next Steps</DialogHeader>
											<FormLayout>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
													<InputField field="lastContactDate" label="Last Contact Date" inputProps={{ type: 'date' }} />
													<InputField field="nextActionDate" label="Next Action Date" inputProps={{ type: 'date' }} />
													<InputField field="nextActionNotes" label="Next Action Notes" />
												</div>
											</FormLayout>
											<DialogFooter>
												<DialogClose>
													<PersistButton label="Save changes" />
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								</div>
								<Table>
									<TableBody>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Last Contact Date</TableCell>
											<TableCell className="font-semibold">
												<Field field="lastContactDate" />
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Next Action Date</TableCell>
											<TableCell className="font-semibold">
												<Field field="nextActionDate" />
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Next Action Notes</TableCell>
											<TableCell className="font-semibold">
												<Field field="nextActionNotes" />
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableWrapper>
						</div>
					</div>
				</TabContent>

				{/* Contacts Tab */}
				<TabContent id="contacts">
					<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
						<UsersIcon className="w-4 h-4" />
						Company & Contacts
					</h2>
					<TableWrapper className="bg-white border rounded-md">
						<div className="flex items-center justify-end px-4 pt-2">
							<Dialog>
								<DialogTrigger asChild>
									<Button size="sm" variant="ghost">
										<PencilIcon size={14} className="mr-1" /> Edit
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>Edit Company & Contacts</DialogHeader>
									<FormLayout>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<SelectField field="company" label="Company" createNewForm={<CompanyForm over="company" />} required>
												<CompanyPreview />
											</SelectField>
											<MultiSelectField field="contacts" label="Contact Persons" createNewForm={<ContactForm over="contacts" />}>
												<ContactsPreview />
											</MultiSelectField>
											<CheckboxField field="decisionMakerIdentified" label="Decision Maker Identified?" />
										</div>
									</FormLayout>
									<DialogFooter>
										<DialogClose>
											<PersistButton label="Save changes" />
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Company</TableCell>
									<TableCell className="font-semibold">
										<HasOne field="company">
											<CompanyPreview />
										</HasOne>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Contacts</TableCell>
									<TableCell className="font-semibold">
										<HasMany field="contacts">
											<ContactsPreview />
										</HasMany>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Decision Maker Identified</TableCell>
									<TableCell className="font-semibold">
										<Field field="decisionMakerIdentified" />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableWrapper>
				</TabContent>

				{/* Qualification Tab */}
				<TabContent id="qualification">
					<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
						<BarChartIcon className="w-4 h-4" />
						Qualification Details
					</h2>
					<TableWrapper className="bg-white border rounded-md">
						<div className="flex items-center justify-end px-4 pt-2">
							<Dialog>
								<DialogTrigger asChild>
									<Button size="sm" variant="ghost">
										<PencilIcon size={14} className="mr-1" /> Edit
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>Edit Qualification Details</DialogHeader>
									<FormLayout>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<SelectEnumField field="serviceType" label="Service Type / Offering" />
											<InputField field="projectScopeSummary" label="Project Scope Summary" />
											<InputField field="budgetEstimate" label="Client Budget Estimate" inputProps={{ type: 'number' }} />
											<SelectEnumField field="projectUrgency" label="Timeline / Urgency" />
											<SelectEnumField field="salesQualificationScore" label="Sales Qualification Score" />
											<SelectEnumField field="priority" label="Priority" />
											<CheckboxField field="isStrategic" label="Strategic Deal?" />
										</div>
									</FormLayout>
									<DialogFooter>
										<DialogClose>
											<PersistButton label="Save changes" />
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Service Type</TableCell>
									<TableCell className="font-semibold">
										<EnumField field="serviceType" options={serviceTypeOptions} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Project Scope</TableCell>
									<TableCell className="font-semibold">
										<Field field="projectScopeSummary" />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Budget Estimate</TableCell>
									<TableCell className="font-semibold">
										<Field field="budgetEstimate" format={priceCurrencyFormat} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Project Urgency</TableCell>
									<TableCell className="font-semibold">
										<EnumField field="projectUrgency" options={projectUrgencyOptions} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Sales Qualification Score</TableCell>
									<TableCell className="font-semibold">
										<EnumField field="salesQualificationScore" options={salesQualificationScoreOptions} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Priority</TableCell>
									<TableCell className="font-semibold">
										<EnumField field="priority" options={priorityOptions} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Strategic Deal</TableCell>
									<TableCell className="font-semibold">
										<Field field="isStrategic" />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableWrapper>
				</TabContent>

				{/* Proposal Tab - conditionally displayed based on status */}
				<TabContent id="proposal">
					<If condition="[status = 'qualified' || status = 'proposal' || status = 'negotiation' || status = 'contractSent' || status = 'won' || status = 'lost' || status = 'onHold']">
						<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
							<FileSignatureIcon className="w-4 h-4" />
							Proposal & Negotiation
						</h2>
						<TableWrapper className="bg-white border rounded-md">
							<div className="flex items-center justify-end px-4 pt-2">
								<Dialog>
									<DialogTrigger asChild>
										<Button size="sm" variant="ghost">
											<PencilIcon size={14} className="mr-1" /> Edit
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>Edit Proposal & Negotiation</DialogHeader>
										<FormLayout>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												<CheckboxField field="proposalSent" label="Proposal Sent?" />
												<InputField field="proposalLink" label="Proposal Link or Doc" />
												<CheckboxField field="contractSent" label="Contract Sent?" />
												<InputField field="contractSignedDate" label="Contract Signed Date" inputProps={{ type: 'date' }} />
											</div>
										</FormLayout>
										<DialogFooter>
											<DialogClose>
												<PersistButton label="Save changes" />
											</DialogClose>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</div>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell className="text-gray-600 font-medium">Proposal Sent</TableCell>
										<TableCell className="font-semibold">
											<Field field="proposalSent" />
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="text-gray-600 font-medium">Proposal Link</TableCell>
										<TableCell className="font-semibold">
											<Field field="proposalLink" />
										</TableCell>
									</TableRow>

									{/* Show contract fields only for negotiation and later stages */}
									<If condition="[status = 'negotiation' || status = 'contractSent' || status = 'won' || status = 'lost' || status = 'onHold']">
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Contract Sent</TableCell>
											<TableCell className="font-semibold">
												<Field field="contractSent" />
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-gray-600 font-medium">Contract Signed Date</TableCell>
											<TableCell className="font-semibold">
												<Field field="contractSignedDate" />
											</TableCell>
										</TableRow>
									</If>
								</TableBody>
							</Table>
						</TableWrapper>
					</If>
				</TabContent>

				{/* Source & Tags Tab */}
				<TabContent id="tags">
					<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
						<TagIcon className="w-4 h-4" />
						Source & Tags
					</h2>
					<TableWrapper className="bg-white border rounded-md">
						<div className="flex items-center justify-end px-4 pt-2">
							<Dialog>
								<DialogTrigger asChild>
									<Button size="sm" variant="ghost">
										<PencilIcon size={14} className="mr-1" /> Edit
									</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>Edit Source & Tags</DialogHeader>
									<FormLayout>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<SelectEnumField field="source" label="Lead Source" />
											<InputField field="referrer" label="Referrer (if any)" />
											<InputField field="marketingCampaign" label="Marketing Campaign" />
											<InputField field="industry" label="Industry" />
										</div>
									</FormLayout>
									<DialogFooter>
										<DialogClose>
											<PersistButton label="Save changes" />
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Lead Source</TableCell>
									<TableCell className="font-semibold">
										<EnumField field="source" options={leadSourceOptions} />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Referrer</TableCell>
									<TableCell className="font-semibold">
										<Field field="referrer" />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Marketing Campaign</TableCell>
									<TableCell className="font-semibold">
										<Field field="marketingCampaign" />
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="text-gray-600 font-medium">Industry</TableCell>
									<TableCell className="font-semibold">
										<Field field="industry" />
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableWrapper>
				</TabContent>

				{/* Notes Tab */}
				<TabContent id="notes">
					<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
						<MessageSquareIcon className="w-4 h-4" />
						Comments
					</h2>
					<div className="flex items-center justify-end mb-4">
						<Binding>
							<EntitySubTree entity={'Lead(id=$id)'} isCreating={false}>
								<RedirectOnPersist to={'leadDetail(id:$entity.id)'} />
								<AddNoteButton />
							</EntitySubTree>
						</Binding>
					</div>
					<div className="flex flex-col gap-4">
						<DataGrid entities={'Note[lead.id = $id]'} initialSorting={{ createdAt: 'desc' }}>
							<DataGridToolbar>
								<DataGridQueryFilter />
							</DataGridToolbar>
							<DataGridLoader>
								<DataGridNotes>
									<NoteCard />
								</DataGridNotes>
							</DataGridLoader>
						</DataGrid>
					</div>
				</TabContent>
			</div>
		</div>
	</div>
))

// Tab button component
const TabButton = Component<{ id: string; icon: React.ReactNode; label: string; defaultActive?: boolean }>(({ id, icon, label, defaultActive }) => (
	<button
		className={`tab-button px-4 py-3 font-medium flex items-center gap-2 border-b-2 ${defaultActive ? 'border-primary text-primary-darker' : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'}`}
		data-tab={id}
		onClick={() => {
			// Handle tab switching with client-side script
			const tabButtons = document.querySelectorAll('.tab-button')
			for (const btn of tabButtons) {
				btn.classList.remove('border-primary', 'text-primary-darker')
				btn.classList.add('border-transparent', 'text-gray-600')
			}

			const tabContents = document.querySelectorAll('.tab-content')
			for (const content of tabContents) {
				content.classList.add('hidden')
			}

			const button = document.querySelector(`[data-tab="${id}"]`)
			button?.classList.add('border-primary', 'text-primary-darker')
			button?.classList.remove('border-transparent', 'text-gray-600')
			document.querySelector(`#tab-content-${id}`)?.classList.remove('hidden')
		}}
	>
		{icon}
		{label}
	</button>
))

// Tab content component
const TabContent = Component<{ id: string; children: React.ReactNode }>(({ id, children }) => (
	<div id={`tab-content-${id}`} className={`tab-content ${id === 'overview' ? '' : 'hidden'}`}>
		{children}
	</div>
))
