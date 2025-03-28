import { DetailButton } from '~/app/components/buttons/detail-button'
import { PersonColumns } from '~/app/components/columns/person-columns'
import { BranchDetail } from '~/app/components/details/branch-detail'
import {
	DataGrid,
	DataGridActionColumn,
	DataGridLoader,
	DataGridPagination,
	DataGridQueryFilter,
	DataGridTable,
	DataGridToolbar,
	DefaultDataGrid,
} from '~/lib/datagrid'
import { Page } from '~/lib/layout/page'
import { AnchorButton } from '~/lib/ui/button'
import { Link } from '@contember/interface'
import { LeadColumns } from '../components/columns/lead-columns'
import { UsersIcon, TrendingUpIcon, BuildingIcon } from 'lucide-react'

export default () => (
	<Page
		title="Branch detail"
		entity="Branch(id=$id)"
		actions={(
			<Link to="branchEdit(id: $entity.id)">
				<AnchorButton>Edit branch</AnchorButton>
			</Link>
		)}
	>
		<div className="max-w-5xl w-full mt-4 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h1 className="text-xl font-bold text-primary-darker flex items-center gap-1.5">
					<BuildingIcon className="w-5 h-5" />
					Branch Information
				</h1>
			</div>
			<div className="px-6 py-6">
				<BranchDetail />
			</div>
		</div>

		<div className="max-w-5xl w-full mt-6 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h2 className="text-lg font-bold text-primary-darker flex items-center gap-1.5">
					<UsersIcon className="w-5 h-5" />
					Employees
				</h2>
			</div>
			<div className="px-6 py-6">
				<DefaultDataGrid entities="Person[branch.id=$id]" toolbar={<DataGridQueryFilter />}>
					<DataGridActionColumn>
						<DetailButton to="employeeDetail(id: $entity.id)" />
					</DataGridActionColumn>
					<PersonColumns />
				</DefaultDataGrid>
			</div>
		</div>

		<div className="max-w-5xl w-full mt-6 mx-auto shadow-md rounded-xl bg-white border overflow-hidden pb-4">
			<div className="bg-gradient-to-r from-primary-lighter/40 to-white px-6 py-4 border-b">
				<h2 className="text-lg font-bold text-primary-darker flex items-center gap-1.5">
					<TrendingUpIcon className="w-5 h-5" />
					Deal Flow
				</h2>
			</div>
			<div className="px-6 py-6">
				<DataGrid entities="Lead[responsibleEmployee.branch.id=$id]">
					<DataGridToolbar>
						<DataGridQueryFilter />
					</DataGridToolbar>
					<DataGridLoader>
						<DataGridTable>
							<DataGridActionColumn>
								<DetailButton to="leadDetail(id: $entity.id)" />
							</DataGridActionColumn>
							<LeadColumns />
						</DataGridTable>
					</DataGridLoader>
					<DataGridPagination />
				</DataGrid>
			</div>
		</div>
	</Page>
)
