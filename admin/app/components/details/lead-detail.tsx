import { Component, Field, HasOne, If } from '@contember/interface'
import { BarChartIcon, FileSignatureIcon, FileTextIcon, MessageSquareIcon, TagIcon, UsersIcon } from 'lucide-react'
import { EmployeePreview } from '~/app/components/previews/employee-preview'
import { priceCurrencyFormat } from '../../../utils/format'
import { StatusBadge } from '../status-badge'
import { TabButton } from '../tabs'
import { LeadContactsTabContent } from '../tabs/lead-contacts-tab-content'
import { LeadNoteTabContent } from '../tabs/lead-note-tab-content'
import { LeadProposalTabContent } from '../tabs/lead-proposal-tab-content'
import { LeadQualificationTabContent } from '../tabs/lead-qualification-tab-content'
import { LeadTagsTabContent } from '../tabs/lead-tags-tab-content'
import { LeadOverviewTabContent } from '../tabs/lead-overview-tab-content'

export const LeadDetail = Component(() => (
	<div className="flex flex-col gap-12">
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

		<div className="max-w-5xl w-full mx-auto shadow-md rounded-xl bg-white border overflow-hidden">
			<div className="flex border-b">
				<TabButton id="overview" icon={<FileTextIcon size={16} />} label="Overview" defaultActive />
				<TabButton id="contacts" icon={<UsersIcon size={16} />} label="Contacts" />
				<TabButton id="qualification" icon={<BarChartIcon size={16} />} label="Qualification" />

				<If condition="[status = 'qualified' || status = 'proposal' || status = 'negotiation' || status = 'contractSent' || status = 'won' || status = 'lost' || status = 'onHold']">
					<TabButton id="proposal" icon={<FileSignatureIcon size={16} />} label="Proposal" />
				</If>

				<TabButton id="tags" icon={<TagIcon size={16} />} label="Source & Tags" />
				<TabButton id="notes" icon={<MessageSquareIcon size={16} />} label="Notes" />
			</div>

			<div className="px-6 py-6">
				<LeadOverviewTabContent />
				<LeadContactsTabContent />
				<LeadQualificationTabContent />
				<LeadProposalTabContent />
				<LeadTagsTabContent />
				<LeadNoteTabContent />
			</div>
		</div>
	</div>
))
