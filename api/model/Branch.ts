import { c } from '@contember/schema-definition'
import { Company } from './Company'
import { Contact } from './Contact'
import { Country } from './Country'
import { Image } from './Image'
import { Person } from './Person'

export class Branch {
	createdAt = c.dateTimeColumn().notNull().default('now')
	name = c.stringColumn().notNull()
	company = c.manyHasOne(Company, 'branches')
	country = c.manyHasOne(Country, 'branches')
	region = c.stringColumn()
	city = c.stringColumn()
	contacts = c.oneHasMany(Contact, 'branch')
	logo = c.manyHasOne(Image, 'branchLogo')
	employees = c.oneHasMany(Person, 'branch')
}
