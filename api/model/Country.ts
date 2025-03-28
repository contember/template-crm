import { c } from '@contember/schema-definition'
import { Branch } from './Branch'
import { Company } from './Company'

export class Country {
	createdAt = c.dateTimeColumn().notNull().default('now')
	name = c.stringColumn().notNull()

	branches = c.oneHasMany(Branch, 'country')
	companies = c.oneHasMany(Company, 'country')
}
