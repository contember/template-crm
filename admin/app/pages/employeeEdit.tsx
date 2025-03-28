import { PersonForm } from '~/app/components/forms/person-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { EntitySubTree } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Employee edit</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Person(personId=$personId)" isCreating={false}>
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						<PersonForm />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
