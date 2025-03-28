import { DetailButton, EditButton } from '~/app/components/buttons/detail-button'
import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import {
	DataGrid,
	DataGridActionColumn,
	DataGridHasOneColumn,
	DataGridLoader,
	DataGridPagination,
	DataGridQueryFilter,
	DataGridTable,
	DataGridTextColumn,
	DataGridToolbar,
} from '~/lib/datagrid'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Field, Link } from '@contember/interface'
import { CirclePlus } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Branch list</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="branchCreate">
								<Button className="bg-primary hover:bg-primary-darker">
									<CirclePlus className="w-4 h-4 mr-2" /> Add branch
								</Button>
							</Link>
						</Slots.Actions>
						<div>
							<DataGrid entities="Branch">
								<DataGridToolbar>
									<DataGridQueryFilter />
								</DataGridToolbar>
								<DataGridLoader>
									<DataGridTable>
										<DataGridActionColumn>
											<div className="flex gap-2">
												<DetailButton to="branchDetail(id: $entity.id)" />
												<EditButton to="branchEdit(id: $entity.id)" />
											</div>
										</DataGridActionColumn>
										<DataGridTextColumn field="name" header="Name" format={value => <strong>{value}</strong>} />
										<DataGridHasOneColumn field="country" header="Country">
											<Field field="name" />
										</DataGridHasOneColumn>
										<DataGridTextColumn field="region" header="Region" />
										<DataGridTextColumn field="city" header="City" />
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
