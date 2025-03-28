import { LeadForm } from '~/app/components/forms/lead-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots, Title } from '~/lib/layout'
import { EntitySubTree, RedirectOnPersist } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12 bg-white min-h-[90vh] p-6">
					<Slots.Title>Create New Deal</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Lead" isCreating>
						<RedirectOnPersist to="leadDetail(id: $entity.id)" />
						<div className="bg-white rounded-lg w-full mx-auto">
							<Slots.Actions>
								<PersistButton label="Create deal" />
							</Slots.Actions>
							<LeadForm isCreating={true} />
						</div>
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
