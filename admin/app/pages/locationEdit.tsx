import { LocationForm } from '~/app/components/forms/location-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { EntitySubTree } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Location edit
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Location(id=$id)" isCreating={false}>
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						<LocationForm />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
