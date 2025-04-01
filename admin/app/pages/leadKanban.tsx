import { EntityListSubTree, Field, HasOne, Link, PersistOnFieldChange, StaticRender } from '@contember/interface'
import { CirclePlus } from 'lucide-react'
import { Binding } from '~/lib/binding'
import { DefaultBoard } from '~/lib/board'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { createSelectOptions } from '../../utils/createSelectOptions'
import { leadStatusOptions } from '../../utils/enums'
import { dateFormat } from '../../utils/format'
import { BoardAmountView } from '../components/lead-board/board-amount-view'
import { BoardColumnLabel } from '../components/lead-board/board-column-label'
import { BoardProposalView } from '../components/lead-board/board-proposal-view'
import { BoardStatusLeadView } from '../components/lead-board/board-status-lead-view'
import { BoardStatusView } from '../components/lead-board/board-status-view'
import { BoardWonView } from '../components/lead-board/board-won-view'

export default () => (
	<Binding>
		<div className="flex flex-col gap-6">
			<Slots.Title>Deal flow</Slots.Title>
			<Slots.Back>
				<BackButton />
			</Slots.Back>
			<Slots.Actions>
				<Button variant="outline" className={'border-primary text-primary'}>
					Kanban
				</Button>
				<Link to="leadList">
					<Button variant="outline" className={'text-gray-400'}>
						List
					</Button>
				</Link>
				<div className="h-full border-l mx-4" />
				<Link to="leadCreate">
					<Button className="bg-primary hover:bg-primary-darker">
						<CirclePlus className="w-4 h-4 mr-2" /> Add lead
					</Button>
				</Link>
			</Slots.Actions>
			<div className="mt-2">
				<div className="flex gap-4 overflow-x-auto">
					<DefaultBoard
						entities="Lead"
						columns={createSelectOptions(leadStatusOptions)}
						columnHeader={<BoardColumnLabel />}
						discriminationField="status"
						sortableBy="displayOrder"
					>
						<PersistOnFieldChange field="status" />

						<div className="flex flex-col rounded-lg mb-3 shadow-sm border border-gray-100 hover:border-primary-lighter/60 transition-colors p-3">
							<Link to="leadDetail(id: $entity.id)">
								<span className="text-base font-bold cursor-pointer underline underline-offset-4 hover:no-underline text-primary-darker">
									<Field field="name" />
								</span>
							</Link>

							<BoardAmountView />

							<BoardStatusView />

							<BoardStatusLeadView />

							<BoardProposalView />

							<BoardWonView />

							<div className="mt-2 pt-2 border-t text-xs text-gray-500">
								<span>
									Created: <Field field="createdAt" format={dateFormat} />
								</span>
							</div>
						</div>
					</DefaultBoard>
				</div>
				<StaticRender>
					<EntityListSubTree entities="Lead" alias="allLeads">
						<Field field="status" />
						<Field field="amount" />
						<HasOne field="responsibleEmployee">
							<Field field="firstName" />
							<Field field="lastName" />
							<Field field="personId" />
						</HasOne>
						<Field field="closeDate" />
						<Field field="source" />
						<Field field="salesQualificationScore" />
						<Field field="nextActionDate" />
						<Field field="serviceType" />
						<Field field="decisionMakerIdentified" />
						<Field field="contractSent" />
						<Field field="createdAt" />
					</EntityListSubTree>
				</StaticRender>
			</div>
		</div>
	</Binding>
)
