import { Component, Field } from '@contember/interface'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { BarChartIcon, PencilIcon } from 'lucide-react'
import { PersistButton } from '~/lib/binding'
import { CheckboxField, FormLayout, InputField, SelectEnumField } from '~/lib/form'
import { Button } from '~/lib/ui/button'
import { DialogFooter, DialogHeader } from '~/lib/ui/dialog'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '~/lib/ui/table'
import { priceCurrencyFormat } from '~/utils/format'
import { EnumField } from '../fields/enum-field'
import { TabContent } from '../tabs'

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

export const LeadQualificationTabContent = Component(() => (
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
	))
