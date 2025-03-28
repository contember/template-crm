import { c } from '@contember/schema-definition'
import { Lead } from './Lead'
import { Person } from './Person'

export class Note {
	createdAt = c.dateTimeColumn().notNull().default('now')
	content = c.stringColumn().notNull()
	author = c.manyHasOne(Person, 'notes')
	lead = c.manyHasOne(Lead, 'notes').cascadeOnDelete()
}
