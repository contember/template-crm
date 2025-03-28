import { EmployeeDetail } from '~/app/components/details/employee-detail'
import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { EntitySubTree, If, Link } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Employee detail</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Person(personId=$personId)" isCreating={false}>
						<Slots.Actions>
							<Link to="employeeEdit(personId: $entity.personId)">
								<Button>Edit employee</Button>
							</Link>
						</Slots.Actions>
						<EmployeeDetail />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
