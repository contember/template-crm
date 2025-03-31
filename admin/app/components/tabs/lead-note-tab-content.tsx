import { MessageSquareIcon } from 'lucide-react'
import { TabContent } from '../tabs'
import { Binding } from '~/lib/binding'
import { Component, EntitySubTree, RedirectOnPersist } from '@contember/interface'
import { AddNoteButton } from '../buttons/add-note-button'
import { DataGrid, DataGridLoader, DataGridQueryFilter, DataGridToolbar } from '~/lib/datagrid'
import { DataGridNotes } from '~/lib/datagrid/note'
import { NoteCard } from '../cards/NoteCard'

export const LeadNoteTabContent = Component(() => (
	<TabContent id="notes">
		<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
			<MessageSquareIcon className="w-4 h-4" />
			Comments
		</h2>
		<div className="flex items-center justify-end mb-4">
			<Binding>
				<EntitySubTree entity={'Lead(id=$id)'} isCreating={false}>
					<RedirectOnPersist to={'leadDetail(id:$entity.id)'} />
					<AddNoteButton />
				</EntitySubTree>
			</Binding>
		</div>
		<div className="flex flex-col gap-4">
			<DataGrid entities={'Note[lead.id = $id]'} initialSorting={{ createdAt: 'desc' }}>
				<DataGridToolbar>
					<DataGridQueryFilter />
				</DataGridToolbar>
				<DataGridLoader>
					<DataGridNotes>
						<NoteCard />
					</DataGridNotes>
				</DataGridLoader>
			</DataGrid>
		</div>
	</TabContent>
))
