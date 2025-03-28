import { ConnectUser } from '~/app/components/connect-user'
import { TextareaField } from '~/lib/form'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTrigger,
} from '~/lib/ui/alert-dialog'
import { Button } from '~/lib/ui/button'
import { Component, Field, HasMany, PersistTrigger } from '@contember/interface'
import { MessageCirclePlus } from 'lucide-react'

export const AddNoteButton = Component(
	() => {
		return (
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button size="sm" variant="secondary" className="bg-primary-lighter hover:bg-primary-lighter/80 text-primary-darker border-primary">
						<MessageCirclePlus className="h-4 w-4 mr-2" />
						Write comment
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent className="max-h-full overflow-y-auto">
					<HasMany field="notes" limit={0} initialEntityCount={1}>
						<TextareaField field="content" label="Comment" />
						<ConnectUser field="author" />
					</HasMany>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<PersistTrigger>
							<AlertDialogAction className="bg-indigo-600 hover:bg-indigo-700">Save</AlertDialogAction>
						</PersistTrigger>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		)
	},
	() => (
		<>
			<HasMany field="notes" limit={0} initialEntityCount={1}>
				<Field field="content" />
				<ConnectUser field="author" />
			</HasMany>
		</>
	),
)