import { Component, Field } from '@contember/interface'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog'
import { TagIcon, PencilIcon } from 'lucide-react'
import { PersistButton } from '~/lib/binding'
import { FormLayout, InputField, SelectEnumField } from '~/lib/form'
import { Button } from '~/lib/ui/button'
import { DialogHeader, DialogFooter } from '~/lib/ui/dialog'
import { TableWrapper, TableBody, TableRow, TableCell, Table } from '~/lib/ui/table'
import { leadSourceOptions } from '~/utils/enums'
import { EnumField } from '../fields/enum-field'
import { TabContent } from '../tabs'

export const LeadTagsTabContent = Component(() => (
		<TabContent id="tags">
			<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
				<TagIcon className="w-4 h-4" />
				Source & Tags
			</h2>
			<TableWrapper className="bg-white border rounded-md">
				<div className="flex items-center justify-end px-4 pt-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button size="sm" variant="ghost">
								<PencilIcon size={14} className="mr-1" /> Edit
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>Edit Source & Tags</DialogHeader>
							<FormLayout>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<SelectEnumField field="source" label="Lead Source" />
									<InputField field="referrer" label="Referrer (if any)" />
									<InputField field="marketingCampaign" label="Marketing Campaign" />
									<InputField field="industry" label="Industry" />
								</div>
							</FormLayout>
							<DialogFooter>
								<DialogClose>
									<PersistButton label="Save changes" />
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Lead Source</TableCell>
							<TableCell className="font-semibold">
								<EnumField field="source" options={leadSourceOptions} />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Referrer</TableCell>
							<TableCell className="font-semibold">
								<Field field="referrer" />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Marketing Campaign</TableCell>
							<TableCell className="font-semibold">
								<Field field="marketingCampaign" />
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Industry</TableCell>
							<TableCell className="font-semibold">
								<Field field="industry" />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableWrapper>
		</TabContent>
	))
