import { Component, Field, HasOne } from '@contember/interface'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { BarChartIcon, FileTextIcon, PencilIcon } from 'lucide-react'
import { PersistButton } from '~/lib/binding'
import { FormLayout, InputField, SelectEnumField, SelectField } from '~/lib/form'
import { Button } from '~/lib/ui/button'
import { DialogFooter, DialogHeader } from '~/lib/ui/dialog'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { priceCurrencyFormat } from '~/utils/format'
import { CompanyForm } from '../forms/company-form'
import { BranchPreview } from '../previews/branch-preview'
import { CompanyPreview } from '../previews/company-preview'
import { EmployeePreview } from '../previews/employee-preview'
import { StatusBadge } from '../status-badge'
import { TabContent } from '../tabs'

export const LeadOverviewTabContent = Component(() => (
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
	))
