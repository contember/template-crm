import { HasOne, HasMany, Field, Component } from '@contember/interface'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog'
import { UsersIcon, PencilIcon } from 'lucide-react'
import { PersistButton } from '~/lib/binding'
import { FormLayout, SelectField, MultiSelectField, CheckboxField } from '~/lib/form'
import { Button } from '~/lib/ui/button'
import { DialogHeader, DialogFooter } from '~/lib/ui/dialog'
import { TableWrapper, TableBody, TableRow, TableCell, Table } from '~/lib/ui/table'
import { CompanyForm } from '../forms/company-form'
import { ContactForm } from '../forms/contact-form'
import { CompanyPreview } from '../previews/company-preview'
import { ContactsPreview } from '../previews/contacts-preview'
import { TabContent } from '../tabs'

export const LeadContactsTabContent = Component(() => (
		<TabContent id="contacts">
			<h2 className="text-md font-bold text-primary-darker mb-5 flex items-center gap-1.5">
				<UsersIcon className="w-4 h-4" />
				Company & Contacts
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
							<DialogHeader>Edit Company & Contacts</DialogHeader>
							<FormLayout>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<SelectField field="company" label="Company" createNewForm={<CompanyForm over="company" />} required>
										<CompanyPreview />
									</SelectField>
									<MultiSelectField field="contacts" label="Contact Persons" createNewForm={<ContactForm over="contacts" />}>
										<ContactsPreview />
									</MultiSelectField>
									<CheckboxField field="decisionMakerIdentified" label="Decision Maker Identified?" />
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
							<TableCell className="text-gray-600 font-medium">Company</TableCell>
							<TableCell className="font-semibold">
								<HasOne field="company">
									<CompanyPreview />
								</HasOne>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Contacts</TableCell>
							<TableCell className="font-semibold">
								<HasMany field="contacts">
									<ContactsPreview />
								</HasMany>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-gray-600 font-medium">Decision Maker Identified</TableCell>
							<TableCell className="font-semibold">
								<Field field="decisionMakerIdentified" />
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableWrapper>
		</TabContent>
	))
