import { c } from '@contember/schema-definition'
import { agentRole, managerRole } from './acl'
import { Lead } from './Lead'

@c.Allow(agentRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
@c.Allow(managerRole, {
	read: true,
	create: true,
	update: true,
	delete: true,
})
export class Offer {
	createdAt = c.dateTimeColumn().notNull().default('now')
	description = c.stringColumn().notNull()
	price = c.doubleColumn().notNull()
	validUntil = c.dateColumn()
	lead = c.manyHasOne(Lead, 'offers')
}
