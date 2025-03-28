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
import { Building, ExternalLink } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>List of companies</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="companyCreate">
								<Button>
									<Building className="w-4 h-4 mr-2" /> Add company
								</Button>
							</Link>
						</Slots.Actions>
						<div>
							<DataGrid entities="Company">
								<DataGridToolbar>
									<DataGridQueryFilter />
								</DataGridToolbar>
								<DataGridLoader>
									<DataGridTable>
										<DataGridActionColumn>
											<div className="flex gap-2">
												<DetailButton to="companyDetail(id: $entity.id)" />
												<EditButton to="companyEdit(id: $entity.id)" />
											</div>
										</DataGridActionColumn>
										<DataGridTextColumn field="name" header="Name" format={value => <span className="font-bold">{value}</span>} />
										<DataGridTextColumn field="industry" header="Industry" />
										<DataGridTextColumn field="identificationNumber" header="Identification number" />
										<DataGridTextColumn
											field="website"
											header="Website"
											format={value =>
												value ? (
													<a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" rel="noopener noreferrer" className="text-sky-900 underline flex items-center gap-2">
														<ExternalLink className="w-4 h-4 ml-2" />
														{value}
													</a>
												) : null
											}
										/>
										<DataGridTextColumn field="vatNumber" header="VAT" />
										<DataGridHasOneColumn field="country" header="Country">
											<Field field="name" />
										</DataGridHasOneColumn>
										<DataGridTextColumn field="address" header="Address" />
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
