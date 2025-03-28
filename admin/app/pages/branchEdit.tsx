import { BranchForm } from '~/app/components/forms/branch-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { EntitySubTree } from '@contember/interface'
import { BuildingIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Branch edit
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Branch(id=$id)" isCreating={false}>
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						
						<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
							<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
								<h1 className="text-xl font-bold text-primary-darker flex items-center gap-1.5">
									<BuildingIcon className="w-5 h-5" />
									Branch Details
								</h1>
							</div>
							
							<div className="px-6 pt-5 pb-2 mt-2">
								<BranchForm />
							</div>
						</div>
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
