import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { FormLayout, InputField } from '~/lib/form'
import { Slots } from '~/lib/layout'
import { DefaultRepeater, RepeaterRemoveItemButton } from '~/lib/repeater'

export default () => (
	<Binding>
		<div className="flex flex-col gap-12">
			<Slots.Title>Settings - countries and regions</Slots.Title>
			<Slots.Back>
				<BackButton />
			</Slots.Back>
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>
			<FormLayout className="gap-6 max-w-5xl">
				<DefaultRepeater entities="Country" orderBy="createdAt" initialEntityCount={1}>
					<div className="flex gap-2">
						<InputField field="name" label="Country name" required />
					</div>
					<div className="absolute right-4 top-0">
						<RepeaterRemoveItemButton />
					</div>
				</DefaultRepeater>
			</FormLayout>
		</div>
	</Binding>
)
