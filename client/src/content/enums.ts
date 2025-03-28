export type ContactType = 
	 | "potentialClient"
	 | "client"
	 | "vipClient"
export type Currency = 
	 | "usd"
	 | "eur"
	 | "gbp"
export type DealStatus = 
	 | "interest"
	 | "overview"
	 | "viewings"
	 | "offers"
	 | "hots"
	 | "contact"
	 | "signed"
	 | "invoicing"
export type EmployeeDivision = 
	 | "industrial"
	 | "officeRetail"
	 | "services"
	 | "propertyManagement"
	 | "projectManagement"
	 | "research"
	 | "operations"
export type LeadStatus = 
	 | "lead"
	 | "contacted"
	 | "qualified"
	 | "proposal"
	 | "negotiation"
	 | "contractSent"
	 | "won"
	 | "lost"
	 | "onHold"
export type PersonRole = 
	 | "agent"
	 | "manager"
	 | "employee"
	 | "head"
	 | "board"
	 | "finance"
	 | "research"
	 | "admin"
export type Priority = 
	 | "low"
	 | "medium"
	 | "high"
export type ProjectUrgency = 
	 | "low"
	 | "medium"
	 | "high"
	 | "critical"
export type SalesQualificationScore = 
	 | "low"
	 | "medium"
	 | "high"
export type ServiceType = 
	 | "mvpBuild"
	 | "uxAudit"
	 | "staffAugmentation"
	 | "consulting"
	 | "maintenance"
	 | "other"
export type SourceType = 
	 | "advertisement"
	 | "personal"
	 | "catalog"
	 | "other"
export type ContemberClientEnums = {
	contactType: ContactType
	currency: Currency
	dealStatus: DealStatus
	employeeDivision: EmployeeDivision
	leadStatus: LeadStatus
	personRole: PersonRole
	priority: Priority
	projectUrgency: ProjectUrgency
	salesQualificationScore: SalesQualificationScore
	serviceType: ServiceType
	sourceType: SourceType
}

