import { Binding, DeleteEntityDialog } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import {
  DataGrid,
  DataGridActionColumn,
  DataGridDateColumn,
  DataGridHasOneColumn,
  DataGridLoader,
  DataGridNumberColumn,
  DataGridPagination,
  DataGridQueryFilter,
  DataGridTable,
  DataGridTextColumn,
  DataGridToolbar,
} from '~/lib/datagrid'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Field, Link } from '@contember/interface'
import { Trash2Icon } from 'lucide-react'

export default () => {
  return (
    <>
      <Binding>
        <div className="flex flex-col gap-12">
          <Slots.Title>Offer list</Slots.Title>
          <Slots.Back>
            <BackButton />
          </Slots.Back>
          <>
            <Slots.Actions>
              <Link to="offerCreate">
                <Button>Add offer</Button>
              </Link>
            </Slots.Actions>
            <div>

              <DataGrid entities="Offer">
                <DataGridToolbar>
                  <DataGridQueryFilter/>
                </DataGridToolbar>
                <DataGridLoader>
                  <DataGridTable>
                    <DataGridTextColumn
                        field="description"
                        header="Description"
                    />
                    <DataGridNumberColumn field="price" header="Price"/>
                    <DataGridDateColumn field="validUntil" header="Valid until"/>

                    <DataGridHasOneColumn field="lead" header="Lead">
                      <Field field="name"/>
                    </DataGridHasOneColumn>

                    <DataGridActionColumn>
                      <div className="flex gap-4 items-center">
                        <Link to="offerDetail(id: $entity.id)">
                          <a>Detail</a>
                        </Link>
                        <Link to="offerEdit(id: $entity.id)">
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
