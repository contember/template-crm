import { LeadDetail } from '~/app/components/details/lead-detail'
import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { EntitySubTree, Link } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						<h1 className="text-xl font-bold text-gray-800">Lead detail</h1>
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Lead(id=$id)" isCreating={false}>
						<Slots.Actions>
							<Link to="leadEdit(id: $entity.id)">
								<Button variant="secondary" className="hover:bg-blue-50">
									Edit lead
								</Button>
							</Link>
						</Slots.Actions>
						<div className=" p-6 rounded-lg shadow-sm">
							<LeadDetail />
						</div>
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
