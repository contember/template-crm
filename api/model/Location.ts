import { c } from '@contember/schema-definition'

export class Location {
	createdAt = c.dateTimeColumn().notNull().default('now')
	country = c.stringColumn().notNull()
	region = c.stringColumn()
	district = c.stringColumn()
	city = c.stringColumn().notNull()
}
