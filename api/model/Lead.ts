import { c } from '@contember/schema-definition'
import { Company } from './Company'
import { Contact } from './Contact'
import { Note } from './Note'
import { Offer } from './Offer'
import { Person } from './Person'
import { currency, leadStatus, priority, projectUrgency, salesQualificationScore, serviceType, sourceType } from './enum'

export class Lead {
	// Core Deal Fields
	createdAt = c.dateTimeColumn().notNull().default('now')
	name = c.stringColumn().notNull()
	company = c.manyHasOne(Company, 'leads')
	contacts = c.manyHasMany(Contact, 'leads')
	responsibleEmployee = c.manyHasOne(Person, 'leads')
	status = c.enumColumn(leadStatus).notNull()
	amount = c.doubleColumn()
	currency = c.enumColumn(currency)
	closeDate = c.dateColumn()

	// Timeline & Activity
	lastContactDate = c.dateColumn()
	nextActionDate = c.dateColumn()
	nextActionNotes = c.stringColumn()

	// Qualification Details
	serviceType = c.enumColumn(serviceType)
	projectScopeSummary = c.stringColumn()
	budgetEstimate = c.doubleColumn()
	projectUrgency = c.enumColumn(projectUrgency)
	decisionMakerIdentified = c.boolColumn()
	salesQualificationScore = c.enumColumn(salesQualificationScore)

	// Proposal & Negotiation
	proposalSent = c.boolColumn()
	proposalLink = c.stringColumn()
	contractSent = c.boolColumn()
	contractSignedDate = c.dateColumn()

	// Source & Attribution
	source = c.enumColumn(sourceType)
	referrer = c.stringColumn()
	marketingCampaign = c.stringColumn()

	// Custom Tags / Categories
	industry = c.stringColumn()
	priority = c.enumColumn(priority)
	isStrategic = c.boolColumn()

	// Related entities
	offers = c.oneHasMany(Offer, 'lead')
	notes = c.oneHasMany(Note, 'lead')

	displayOrder = c.intColumn().default(0)
}
