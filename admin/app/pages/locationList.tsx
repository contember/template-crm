import { Binding, DeleteEntityDialog } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import {
  DataGrid,
  DataGridActionColumn,
  DataGridLoader,
  DataGridPagination,
  DataGridQueryFilter,
  DataGridTable,
  DataGridTextColumn,
  DataGridToolbar,
} from '~/lib/datagrid'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Link } from '@contember/interface'
import { Trash2Icon } from 'lucide-react'

export default () => {
  return (
    <>
      <Binding>
        <div className="flex flex-col gap-12">
          <Slots.Title>Location list</Slots.Title>
          <Slots.Back>
            <BackButton />
          </Slots.Back>
          <>
            <Slots.Actions>
              <Link to="locationCreate">
                <Button>Add location</Button>
              </Link>
            </Slots.Actions>
            <div>

              <DataGrid entities="Location">
                <DataGridToolbar>
                  <DataGridQueryFilter/>
                </DataGridToolbar>
                <DataGridLoader>
                  <DataGridTable>
                    <DataGridTextColumn field="country" header="Country"/>
                    <DataGridTextColumn field="region" header="Region"/>
                    <DataGridTextColumn field="district" header="District"/>
                    <DataGridTextColumn field="city" header="City"/>
                    <DataGridActionColumn>
                      <div className="flex gap-4 items-center">
                        <Link to="locationDetail(id: $entity.id)">
                          <a>Detail</a>
                        </Link>
                        <Link to="locationEdit(id: $entity.id)">
                          <a>Edit</a>
                        </Link>
                        <DeleteEntityDialog
                            trigger={
                              <Button variant="destructive">
                                <Trash2Icon className="w-4"/>
                              </Button>
                            }
                        />
                      </div>
                    </DataGridActionColumn>
                  </DataGridTable>
                </DataGridLoader>
                <DataGridPagination/>
              </DataGrid>
            </div>
          </>
        </div>
      </Binding>
    </>
  )
}
