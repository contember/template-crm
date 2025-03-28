import { BranchForm } from '~/app/components/forms/branch-form'
import { Binding, PersistButton } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots, Title } from '~/lib/layout'
import { EntitySubTree, RedirectOnPersist } from '@contember/interface'
import { Building2Icon, BuildingIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Title>Create branch</Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Branch" isCreating>
						<RedirectOnPersist to="branchDetail(id: $entity.id)" />
						<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
							<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
								<h1 className="text-xl font-bold text-primary-darker">Branch Details</h1>
							</div>
							
							<div className="px-6 pt-5 pb-2 mt-2">
								<h2 className="text-md font-bold text-gray-700 mb-7 ml-4 flex items-center gap-1.5">
									<Building2Icon className="w-4 h-4" />
									Branch Information
								</h2>
								<BranchForm />
							</div>
						</div>
						
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
