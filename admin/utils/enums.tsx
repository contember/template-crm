import { c } from '@contember/schema-definition'

type ColorHexType = {
	[key: string]: string
}

export const personRoleOptions = {
	admin: 'Admin',
}

export const leadStatusOptions = {
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

export const leadStatusColorHex: ColorHexType = {
	lead: '#6b7280', // gray-500
	contacted: '#3b82f6', // blue-500
	qualified: '#10b981', // emerald-500
	proposal: '#8b5cf6', // violet-500
	negotiation: '#f59e0b', // amber-500
	contractSent: '#6366f1', // indigo-500
	won: '#059669', // emerald-600
	lost: '#ef4444', // red-500
	onHold: '#9ca3af', // gray-400
}

export const leadSourceOptions = {
	advertisement: 'Advertisement',
	personal: 'Personal',
	catalog: 'Catalog',
	other: 'Other',
}

export const dealStatusOptions = {
	interest: 'Confirmed interest',
	viewings: 'Viewings',
	offers: 'Offers',
	hots: 'HoTs processiong',
	contact: 'Contract processing',
	signed: 'Signed',
	invoicing: 'For invoicing',
}

export const dealStatusColorHex: ColorHexType = {
	interest: '#d8d8d8',
	overview: '#e0e7ff',
	viewings: '#c7d2fe',
	offers: '#a5b4fc',
	hots: '#818cf8',
	contact: '#6366f1',
	signed: '#4f46e5',
	invoicing: '#3730a3',
}
