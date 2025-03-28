import { ContemberClientNames, LeadStatus } from '@app/client'
import { createEnumFormatter } from '~/lib/formatting'
import { EnumLabels, EnumOptionsFormatter, FieldLabelFormatter, FieldLabels } from '~/lib/labels'

export const LeadStateLabels: Record<LeadStatus, string> = {
	lead: 'Lead / Prospecting',
	contacted: 'Contacted / Outreach',
	qualified: 'Qualified / Discovery',
	proposal: 'Proposal / Demo',
	negotiation: 'Negotiation / In Discussion',
	contractSent: 'Contract Sent',
	won: 'Won / Closed-Won ✅',
	lost: 'Lost / Closed-Lost ❌',
	onHold: 'On Hold / Deferred',
}

export const formatLeadState = createEnumFormatter(LeadStateLabels)


export const fieldLabels = {
	Image: {
		url: 'URL',
		width: 'Width',
		height: 'Height',
		alt: 'Alt',
		branchLogo: 'Branch Logo',
		createdAt: 'Created At',
		meta: 'Meta',
		companyLogo: 'Company Logo',
		profilePicture: 'Profile Picture',
	},
	Branch: {
		createdAt: 'Created At',
		city: 'City',
		company: 'Company',
		contacts: 'Contacts',
		country: 'Country',
	},
} satisfies FieldLabels

const sentenceCase = (str: string) => str.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export const fieldLabelFormatter: FieldLabelFormatter = (entityName, fieldName) => {
	return (fieldLabels as any)[entityName]?.[fieldName] ?? sentenceCase(fieldName)
}

export const enumLabels = {
	currency: {
		eur: 'EUR',
		gbp: 'GBP',
		usd: 'USD',
	},
	employeeDivision: {
		industrial: 'Industrial',
		officeRetail: 'Office Retail',
		operations: 'Operations',
		projectManagement: 'Project Management',
		propertyManagement: 'Property Management',
		research: 'Research',
		services: 'Services',
	},
	leadStatus: {
		lead: 'Lead / Prospecting',
		contacted: 'Contacted / Outreach',
		qualified: 'Qualified / Discovery',
		proposal: 'Proposal / Demo',
		negotiation: 'Negotiation / In Discussion',
		contractSent: 'Contract Sent',
		won: 'Won / Closed-Won ✅',
		lost: 'Lost / Closed-Lost ❌',
		onHold: 'On Hold / Deferred',
	},
	personRole: {
		admin: 'Admin',
		agent: 'Agent',
		board: 'Board',
		employee: 'Employee',
		finance: 'Finance',
		head: 'Head',
		manager: 'Manager',
		research: 'Research',
	},
	sourceType: {
		catalog: 'Catalog',
		other: 'Other',
		personal: 'Personal',
		advertisement: 'Advertisement',
	},
	serviceType: {
		mvpBuild: 'MVP Build',
		uxAudit: 'UX Audit',
		staffAugmentation: 'Staff Augmentation',
		consulting: 'Consulting',
		maintenance: 'Maintenance',
		other: 'Other',
	},
	salesQualificationScore: {
		low: 'Low',
		medium: 'Medium',
		high: 'High',
	},
	priority: {
		low: 'Low',
		medium: 'Medium',
		high: 'High',
	},
	projectUrgency: {
		low: 'Low',
		medium: 'Medium',
		high: 'High',
		critical: 'Critical',
	},
} satisfies EnumLabels

export const enumOptionsFormatter: EnumOptionsFormatter = enumName => {
	if (!(enumName in enumLabels)) {
		return Object.fromEntries(Object.values(ContemberClientNames.enums[enumName]).map(value => [value, value]))
	}
	return (enumLabels as any)[enumName] ?? {}
}
