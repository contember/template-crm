import { DetailButton, EditButton } from '~/app/components/buttons/detail-button'
import { CellsContact } from '~/app/components/cells'
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
import { UserPlusIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>Contact list</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="contactCreate">
								<Button>
									<UserPlusIcon className="w-4 h-4 mr-2" /> Add contact
								</Button>
							</Link>
						</Slots.Actions>
						<div>
							<DataGrid entities="Contact">
								<DataGridToolbar>
									<DataGridQueryFilter />
								</DataGridToolbar>
								<DataGridLoader>
									<DataGridTable>
										<DataGridActionColumn>
											<div className="flex gap-2">
												<DetailButton to="contactDetail(id: $entity.id)" />
												<EditButton to="contactEdit(id: $entity.id)" />
											</div>
										</DataGridActionColumn>
										<CellsContact />
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
