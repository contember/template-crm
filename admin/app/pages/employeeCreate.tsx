import { PersonForm } from '~/app/components/forms/person-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { EntitySubTree, RedirectOnPersist } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Employee create</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Person" isCreating>
						<RedirectOnPersist to="employeeDetail(personId: $entity.personId)" />
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
