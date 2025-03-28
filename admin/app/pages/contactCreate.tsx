import { ContactForm } from '~/app/components/forms/contact-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { EntitySubTree, RedirectOnPersist } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Create new contact
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Contact" isCreating>
						<RedirectOnPersist to="contactDetail(id: $entity.id)" />
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						<ContactForm />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
