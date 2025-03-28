import { CompanyDetail } from '~/app/components/details/company-detail'
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
					<Slots.Title>Company detail</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Company(id=$id)" isCreating={false}>
						<Slots.Actions>
							<Link to="companyEdit(id: $entity.id)">
								<Button>Edit company</Button>
							</Link>
						</Slots.Actions>
						<CompanyDetail />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
