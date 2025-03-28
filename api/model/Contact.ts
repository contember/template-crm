import { c } from '@contember/schema-definition'
import { Branch } from './Branch'
import { Company } from './Company'
import { Lead } from './Lead'
import { agentRole, managerRole } from './acl'
import { contactType } from './enum'

@c.Unique('email')

@c.Allow(agentRole, {
	read: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	create: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	update: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	delete: true,
})
@c.Allow(managerRole, {
	read: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	create: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	update: ['createdAt', 'firstName', 'lastName', 'email', 'phone', 'leads'],
	delete: true,
})
export class Contact {
	createdAt = c.dateTimeColumn().notNull().default('now')
	firstName = c.stringColumn().notNull()
	lastName = c.stringColumn().notNull()
	email = c.stringColumn()
	phone = c.stringColumn()
	contactType = c.enumColumn(contactType).notNull().default('potentialClient')
	position = c.stringColumn()
	address = c.stringColumn() // delete by EDITOR
	note = c.stringColumn()
	company = c.manyHasOne(Company, 'contacts')
	branch = c.manyHasOne(Branch, 'contacts')
	leads = c.manyHasManyInverse(Lead, 'contacts')
}
