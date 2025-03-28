import { DetailButton } from '~/app/components/buttons/detail-button'
import { LeadColumns } from '~/app/components/columns/lead-columns'
import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { DataGridActionColumn, DataGridQueryFilter, DefaultDataGrid } from '~/lib/datagrid'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Link } from '@contember/interface'
import { CirclePlus } from 'lucide-react'

export default () => (
	<Binding>
		<div className="flex flex-col gap-12">
			<Slots.Title>Lead list</Slots.Title>
			<Slots.Back>
				<BackButton />
			</Slots.Back>
			<Slots.Actions>
				<Link to="leadKanban">
					<Button variant="outline" className={'text-gray-400'}>
						Kanban
					</Button>
				</Link>
				<Button variant="outline" className={'border-primary'}>
					List
				</Button>
				<div className="h-full border-l mx-4" />
				<Link to="leadCreate">
					<Button>
						<CirclePlus className="w-4 h-4 mr-2" /> Add lead
					</Button>
				</Link>
			</Slots.Actions>
			<div>
				<DefaultDataGrid entities="Lead" toolbar={<DataGridQueryFilter />}>
					<DataGridActionColumn>
						<DetailButton to="leadDetail(id: $entity.id)" />
					</DataGridActionColumn>
					<LeadColumns />
				</DefaultDataGrid>
			</div>
		</div>
	</Binding>
)
