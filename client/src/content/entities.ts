import type { ContactType } from './enums'
import type { Currency } from './enums'
import type { DealStatus } from './enums'
import type { EmployeeDivision } from './enums'
import type { LeadStatus } from './enums'
import type { PersonRole } from './enums'
import type { Priority } from './enums'
import type { ProjectUrgency } from './enums'
import type { SalesQualificationScore } from './enums'
import type { ServiceType } from './enums'
import type { SourceType } from './enums'

export type JSONPrimitive = string | number | boolean | null
export type JSONValue = JSONPrimitive | JSONObject | JSONArray
export type JSONObject = { readonly [K in string]?: JSONValue }
export type JSONArray = readonly JSONValue[]

export type Branch <OverRelation extends string | never = never> = {
	name: 'Branch'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ contacts: Contact['unique']}, OverRelation>
		| Omit<{ employees: Person['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		name: string
		region: string | null
		city: string | null
	}
	hasOne: {
		company: Company
		country: Country
		logo: Image
	}
	hasMany: {
		contacts: Contact<'branch'>
		employees: Person<'branch'>
	}
	hasManyBy: {
		contactsByEmail: { entity: Contact; by: {email: string}  }
		employeesByPersonId: { entity: Person; by: {personId: string}  }
		employeesByEmail: { entity: Person; by: {email: string}  }
		employeesBySubordinates: { entity: Person; by: {subordinates: Person['unique']}  }
		employeesByLeads: { entity: Person; by: {leads: Lead['unique']}  }
		employeesByNotes: { entity: Person; by: {notes: Note['unique']}  }
		employeesByTenantPerson: { entity: Person; by: {tenantPerson: TenantPerson['unique']}  }
	}
}
export type Company <OverRelation extends string | never = never> = {
	name: 'Company'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ branches: Branch['unique']}, OverRelation>
		| Omit<{ contacts: Contact['unique']}, OverRelation>
		| Omit<{ leads: Lead['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		name: string
		industry: string | null
		address: string | null
		vatNumber: string | null
		identificationNumber: string | null
		website: string | null
	}
	hasOne: {
		country: Country
		logo: Image
	}
	hasMany: {
		branches: Branch<'company'>
		contacts: Contact<'company'>
		leads: Lead<'company'>
	}
	hasManyBy: {
		branchesByContacts: { entity: Branch; by: {contacts: Contact['unique']}  }
		branchesByEmployees: { entity: Branch; by: {employees: Person['unique']}  }
		contactsByEmail: { entity: Contact; by: {email: string}  }
		leadsByOffers: { entity: Lead; by: {offers: Offer['unique']}  }
		leadsByNotes: { entity: Lead; by: {notes: Note['unique']}  }
	}
}
export type Contact <OverRelation extends string | never = never> = {
	name: 'Contact'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ email: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		firstName: string
		lastName: string
		email: string | null
		phone: string | null
		contactType: ContactType
		position: string | null
		address: string | null
		note: string | null
	}
	hasOne: {
		company: Company
		branch: Branch
	}
	hasMany: {
		leads: Lead
	}
	hasManyBy: {
	}
}
export type Country <OverRelation extends string | never = never> = {
	name: 'Country'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ branches: Branch['unique']}, OverRelation>
		| Omit<{ companies: Company['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		name: string
	}
	hasOne: {
	}
	hasMany: {
		branches: Branch<'country'>
		companies: Company<'country'>
	}
	hasManyBy: {
		branchesByContacts: { entity: Branch; by: {contacts: Contact['unique']}  }
		branchesByEmployees: { entity: Branch; by: {employees: Person['unique']}  }
		companiesByBranches: { entity: Company; by: {branches: Branch['unique']}  }
		companiesByContacts: { entity: Company; by: {contacts: Contact['unique']}  }
		companiesByLeads: { entity: Company; by: {leads: Lead['unique']}  }
	}
}
export type File <OverRelation extends string | never = never> = {
	name: 'File'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		url: string
	}
	hasOne: {
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Image <OverRelation extends string | never = never> = {
	name: 'Image'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ meta: ImageMetadata['unique']}, OverRelation>
		| Omit<{ companyLogo: Company['unique']}, OverRelation>
		| Omit<{ branchLogo: Branch['unique']}, OverRelation>
		| Omit<{ profilePicture: ProfilePicture['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		url: string
		width: number | null
		height: number | null
		alt: string | null
	}
	hasOne: {
		meta: ImageMetadata
	}
	hasMany: {
		companyLogo: Company<'logo'>
		branchLogo: Branch<'logo'>
		profilePicture: ProfilePicture<'image'>
	}
	hasManyBy: {
		companyLogoByBranches: { entity: Company; by: {branches: Branch['unique']}  }
		companyLogoByContacts: { entity: Company; by: {contacts: Contact['unique']}  }
		companyLogoByLeads: { entity: Company; by: {leads: Lead['unique']}  }
		branchLogoByContacts: { entity: Branch; by: {contacts: Contact['unique']}  }
		branchLogoByEmployees: { entity: Branch; by: {employees: Person['unique']}  }
		profilePictureByPerson: { entity: ProfilePicture; by: {person: Person['unique']}  }
	}
}
export type ImageMetadata <OverRelation extends string | never = never> = {
	name: 'ImageMetadata'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ image: Image['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		fileName: string | null
		lastModified: string | null
		fileSize: number | null
		fileType: string | null
	}
	hasOne: {
		image: Image
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Lead <OverRelation extends string | never = never> = {
	name: 'Lead'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ offers: Offer['unique']}, OverRelation>
		| Omit<{ notes: Note['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		name: string
		status: LeadStatus
		amount: number | null
		currency: Currency | null
		closeDate: string | null
		lastContactDate: string | null
		nextActionDate: string | null
		nextActionNotes: string | null
		serviceType: ServiceType | null
		projectScopeSummary: string | null
		budgetEstimate: number | null
		projectUrgency: ProjectUrgency | null
		decisionMakerIdentified: boolean | null
		salesQualificationScore: SalesQualificationScore | null
		proposalSent: boolean | null
		proposalLink: string | null
		contractSent: boolean | null
		contractSignedDate: string | null
		source: SourceType | null
		referrer: string | null
		marketingCampaign: string | null
		industry: string | null
		priority: Priority | null
		isStrategic: boolean | null
		displayOrder: number | null
	}
	hasOne: {
		company: Company
		responsibleEmployee: Person
	}
	hasMany: {
		contacts: Contact
		offers: Offer<'lead'>
		notes: Note<'lead'>
	}
	hasManyBy: {
	}
}
export type Location <OverRelation extends string | never = never> = {
	name: 'Location'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		country: string
		region: string | null
		district: string | null
		city: string
	}
	hasOne: {
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Note <OverRelation extends string | never = never> = {
	name: 'Note'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		content: string
	}
	hasOne: {
		author: Person
		lead: Lead
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Offer <OverRelation extends string | never = never> = {
	name: 'Offer'
	unique:
		| Omit<{ id: string}, OverRelation>
	columns: {
		id: string
		createdAt: string
		description: string
		price: number
		validUntil: string | null
	}
	hasOne: {
		lead: Lead
	}
	hasMany: {
	}
	hasManyBy: {
	}
}
export type Person <OverRelation extends string | never = never> = {
	name: 'Person'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ personId: string}, OverRelation>
		| Omit<{ email: string}, OverRelation>
		| Omit<{ subordinates: Person['unique']}, OverRelation>
		| Omit<{ leads: Lead['unique']}, OverRelation>
		| Omit<{ notes: Note['unique']}, OverRelation>
		| Omit<{ tenantPerson: TenantPerson['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		updatedAt: string
		firstName: string
		lastName: string
		email: string
		phone: string | null
		role: PersonRole | null
		personId: string | null
	}
	hasOne: {
		supervisor: Person
		branch: Branch
		profilePicture: ProfilePicture
		tenantPerson: TenantPerson
	}
	hasMany: {
		subordinates: Person<'supervisor'>
		leads: Lead<'responsibleEmployee'>
		notes: Note<'author'>
	}
	hasManyBy: {
		subordinatesByPersonId: { entity: Person; by: {personId: string}  }
		subordinatesByEmail: { entity: Person; by: {email: string}  }
		subordinatesBySubordinates: { entity: Person; by: {subordinates: Person['unique']}  }
		subordinatesByLeads: { entity: Person; by: {leads: Lead['unique']}  }
		subordinatesByNotes: { entity: Person; by: {notes: Note['unique']}  }
		subordinatesByTenantPerson: { entity: Person; by: {tenantPerson: TenantPerson['unique']}  }
		leadsByOffers: { entity: Lead; by: {offers: Offer['unique']}  }
		leadsByNotes: { entity: Lead; by: {notes: Note['unique']}  }
	}
}
export type ProfilePicture <OverRelation extends string | never = never> = {
	name: 'ProfilePicture'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ person: Person['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
	}
	hasOne: {
		image: Image
	}
	hasMany: {
		person: Person<'profilePicture'>
	}
	hasManyBy: {
		personByPersonId: { entity: Person; by: {personId: string}  }
		personByEmail: { entity: Person; by: {email: string}  }
		personBySubordinates: { entity: Person; by: {subordinates: Person['unique']}  }
		personByLeads: { entity: Person; by: {leads: Lead['unique']}  }
		personByNotes: { entity: Person; by: {notes: Note['unique']}  }
		personByTenantPerson: { entity: Person; by: {tenantPerson: TenantPerson['unique']}  }
	}
}
export type TenantPerson <OverRelation extends string | never = never> = {
	name: 'TenantPerson'
	unique:
		| Omit<{ id: string}, OverRelation>
		| Omit<{ person: Person['unique']}, OverRelation>
	columns: {
		id: string
		createdAt: string
		identityId: string
		email: string | null
		otpUri: string | null
		otpActivatedAt: string | null
		idpOnly: string | null
		roles: string | null
	}
	hasOne: {
		person: Person
	}
	hasMany: {
	}
	hasManyBy: {
	}
}

export type ContemberClientEntities = {
	Branch: Branch
	Company: Company
	Contact: Contact
	Country: Country
	File: File
	Image: Image
	ImageMetadata: ImageMetadata
	Lead: Lead
	Location: Location
	Note: Note
	Offer: Offer
	Person: Person
	ProfilePicture: ProfilePicture
	TenantPerson: TenantPerson
}

export type ContemberClientSchema = {
	entities: ContemberClientEntities
}
