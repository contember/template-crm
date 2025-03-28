import { DetailButton, EditButton } from '~/app/components/buttons/detail-button'
import { PersonColumns } from '~/app/components/columns/person-columns'
import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import {
	DataGrid,
	DataGridActionColumn,
	DataGridLoader,
	DataGridPagination,
	DataGridQueryFilter,
	DataGridTable,
	DataGridToolbar,
} from '~/lib/datagrid'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Link } from '@contember/interface'
import { CirclePlus } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Employee list</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="employeeCreate">
								<Button>
									<CirclePlus className="w-4 h-4 mr-2" /> Add employee
								</Button>
							</Link>
						</Slots.Actions>
						<div>
							<DataGrid entities="Person">
								<DataGridToolbar>
									<DataGridQueryFilter />
								</DataGridToolbar>
								<DataGridLoader>
									<DataGridTable>
										<DataGridActionColumn>
											<div className="flex gap-2">
												<DetailButton to="employeeDetail(personId: $entity.personId)" />
												<EditButton to="employeeEdit(personId: $entity.personId)" />
											</div>
										</DataGridActionColumn>
										<PersonColumns />
									</DataGridTable>
								</DataGridLoader>
								<DataGridPagination />
							</DataGrid>
						</div>
					</>
				</div>
			</Binding>
		</>
	)
}
