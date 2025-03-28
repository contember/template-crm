import { c } from '@contember/schema-definition'

export const agentRole = c.createRole('agent', { stages: '*' })
export const managerRole = c.createRole('manager', { stages: '*' })
export const employeeRole = c.createRole('employee', { stages: '*' })
export const headRole = c.createRole('head', { stages: '*' })
export const boardRole = c.createRole('board', { stages: '*' })
export const financeRole = c.createRole('finance', { stages: '*' })
export const researchRole = c.createRole('research', { stages: '*' })
