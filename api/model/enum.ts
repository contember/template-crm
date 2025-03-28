import { c } from '@contember/schema-definition'

export const employeeDivision = c.createEnum(
	'industrial',
	'officeRetail',
	'services',
	'propertyManagement',
	'projectManagement',
	'research',
	'operations',
)
export const leadStatus = c.createEnum('lead', 'contacted', 'qualified', 'proposal', 'negotiation', 'contractSent', 'won', 'lost', 'onHold')
export const currency = c.createEnum('usd', 'eur', 'gbp')
export const contactType = c.createEnum('potentialClient', 'client', 'vipClient')
export const sourceType = c.createEnum('advertisement', 'personal', 'catalog', 'other')
export const dealStatus = c.createEnum('interest', 'overview', 'viewings', 'offers', 'hots', 'contact', 'signed', 'invoicing')
export const personRole = c.createEnum('agent', 'manager', 'employee', 'head', 'board', 'finance', 'research', 'admin')

export const serviceType = c.createEnum('mvpBuild', 'uxAudit', 'staffAugmentation', 'consulting', 'maintenance', 'other')
export const salesQualificationScore = c.createEnum('low', 'medium', 'high')
export const priority = c.createEnum('low', 'medium', 'high')
export const projectUrgency = c.createEnum('low', 'medium', 'high', 'critical')
