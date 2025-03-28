import { c } from '@contember/schema-definition'
import { Branch } from './Branch'
import { Contact } from './Contact'
import { Country } from './Country'
import { Image } from './Image'
import { Lead } from './Lead'
import { agentRole, managerRole } from './acl'

@c.Allow(agentRole, {
	read: ['createdAt', 'name', 'industry', 'branches', 'leads'],
	create: ['createdAt', 'name', 'industry', 'branches', 'leads'],
	update: ['createdAt', 'name', 'industry', 'branches', 'leads'],
})
@c.Allow(managerRole, {
	read: ['createdAt', 'name', 'industry', 'branches', 'leads'],
	create: ['createdAt', 'name', 'industry', 'branches', 'leads'],
	update: ['createdAt', 'name', 'industry', 'branches', 'leads'],
	delete: true,
})
export class Company {
	createdAt = c.dateTimeColumn().notNull().default('now')
	name = c.stringColumn().notNull()
	industry = c.stringColumn()
	country = c.manyHasOne(Country, 'companies')
	address = c.stringColumn()
	vatNumber = c.stringColumn()
	identificationNumber = c.stringColumn()
	website = c.stringColumn()
	branches = c.oneHasMany(Branch, 'company')
	contacts = c.oneHasMany(Contact, 'company')
	leads = c.oneHasMany(Lead, 'company')
	logo = c.manyHasOne(Image, 'companyLogo')
}
