import { c } from '@contember/schema-definition'
import { Branch } from './Branch'
import { Image, ProfilePicture } from './Image'
import { Lead } from './Lead'
import { Note } from './Note'
import { agentRole, managerRole } from './acl'
import { employeeDivision, personRole } from './enum'

@c.Unique('email')

@c.Allow(agentRole, {
	read: true,
	update: true,
})
@c.Allow(managerRole, {
	read: true,
	create: true,
	update: true,
})
export class Person {
	createdAt = c.dateTimeColumn().notNull().default('now')
	updatedAt = c.dateTimeColumn().notNull().default('now')
	firstName = c.stringColumn().notNull()
	lastName = c.stringColumn().notNull()
	email = c.stringColumn().notNull()
	phone = c.stringColumn()
	subordinates = c.oneHasMany(Person, 'supervisor')
	supervisor = c.manyHasOne(Person, 'subordinates')
	leads = c.oneHasMany(Lead, 'responsibleEmployee')
	branch = c.manyHasOne(Branch, 'employees')
	profilePicture = c.manyHasOne(ProfilePicture, 'person')
	notes = c.oneHasMany(Note, 'author')

	role = c.enumColumn(personRole)
	personId = c.uuidColumn().unique()
	tenantPerson = c.oneHasOneInverse(TenantPerson, 'person')
}

@c.View(`
	SELECT
		tenant_person.id,
		tenant_person.email,
		tenant_person.identity_id,
		content_person.id AS person_id,
		STRING_AGG(DISTINCT project_membership.role, ', ') AS roles
	FROM person AS content_person
		FULL OUTER JOIN tenant.person AS tenant_person ON tenant_person.id = content_person.person_id
		LEFT JOIN tenant.identity AS tenant_identity ON tenant_person.identity_id = tenant_identity.id
		LEFT JOIN tenant.project_membership AS project_membership ON tenant_identity.id = project_membership.identity_id
	WHERE tenant_person.id IS NOT NULL
	GROUP BY tenant_person.id, content_person.id
`)
export class TenantPerson {
	createdAt = c.dateTimeColumn().notNull().default('now')
	identityId = c.uuidColumn().notNull()
	email = c.stringColumn()
	otpUri = c.stringColumn()
	otpActivatedAt = c.stringColumn()
	idpOnly = c.stringColumn()
	roles = c.stringColumn()
	person = c.oneHasOne(Person, 'tenantPerson')
}
