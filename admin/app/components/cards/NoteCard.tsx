import { Component, DeleteEntityTrigger, Field, If } from '@contember/interface'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { dateTimeFormat } from '../../../utils/format'
import { Button } from '~/lib/ui/button'

export const NoteCard = Component(({ showDeal, disableDelete }: { showDeal?: boolean; disableDelete?: boolean }) => (
	<div className="max-w-3xl flex">
		<div className="w-full">
			<div className="bg-white border p-3 rounded-lg text-sm mb-1 shadow-sm hover:shadow-md transition-shadow">
				<Field field="content" />
			</div>

			<div className="text-xs text-gray-500 p-0.5 flex items-center gap-2 pl-2">
				<span className="text-blue-700 font-medium">
					<Field field="author.firstName" /> <Field field="author.lastName" />
				</span>
				<div className="h-1 w-1 bg-gray-400 rounded-full" />
				<Field field="createdAt" format={dateTimeFormat} />
			</div>
		</div>
		{!disableDelete && (
			<DeleteEntityTrigger immediatePersist>
				<Button variant="ghost" size="xs">
					<Trash2 className="w-4 mx-2 text-destructive" />
				</Button>
			</DeleteEntityTrigger>
		)}
	</div>
))