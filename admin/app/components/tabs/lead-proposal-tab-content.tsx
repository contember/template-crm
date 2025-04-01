import { If, Field, Component } from '@contember/interface'
import { FileSignatureIcon, PencilIcon } from 'lucide-react'
import { PersistButton } from '~/lib/binding'
import { FormLayout, CheckboxField, InputField } from '~/lib/form'
import { Button } from '~/lib/ui/button'
import { DialogHeader, DialogFooter, Dialog, DialogClose, DialogContent, DialogTrigger } from '~/lib/ui/dialog'
import { TableWrapper, TableBody, TableRow, TableCell, Table } from '~/lib/ui/table'
import { TabContent } from '../tabs'

export const LeadProposalTabContent = Component(() => (
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
	))
