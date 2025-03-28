import { FieldValue } from '@contember/interface'
import { format } from 'date-fns'
import { ReactNode } from 'react'

export const dateFormat = (value: FieldValue) => (value ? format(value.toString(), 'dd. MM. yyyy') : '-')
export const dateDdMmFormat = (value: FieldValue) => (value ? format(value.toString(), 'dd. MM.') : '-')
export const timeDateFormat = (value: FieldValue) => (value ? format(value.toString(), 'HH:mm') : '-')
export const dateTimeFormat = (value: FieldValue) => (value ? format(value.toString(), 'dd. MM. yyyy HH:mm') : '-')
export const dateDdMmTimeFormat = (value: FieldValue) => (value ? format(value.toString(), 'dd. MM. HH:mm') : '-')
export const dateMonthFormat = (value: FieldValue) => {
	if (!value) {
		return '-'
	}

	const date = new Date(value.toString())
	const month = date.getMonth()

	const monthNames = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec']

	return monthNames[month]
}
export const dateMonthYearFormat = (value: string | null) => {
	if (!value) {
		return '-'
	}

	const date = new Date(value)
	const month = date.getMonth()
	const year = date.getFullYear()

	const monthNames = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec']

	return `${monthNames[month]} ${year}`
}
export const timeFormat = (value: string | null) => (value ? format(value, 'HH:mm') : '-')
export const dateWithSpecialFormat = (value: string | null) => {
	if (!value) {
		return '-'
	}

	const date = new Date(value)
	const now = new Date()
	const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60)

	if (diffInHours <= 24) {
		return `před ${Math.floor(diffInHours)}h`
	}

	return format(value, 'dd. MM. yyyy')
}

export const longTextFormat = (value: FieldValue, length = 60): ReactNode => {
	const stringValue = value?.toString()
	return stringValue && stringValue.length > length ? `${stringValue.substring(0, length)}...` : stringValue
}
export const orderFormat = (value: FieldValue) => {
	if (value === null || value === undefined) {
		return '-'
	}
	const numberValue = Number(value)
	return `${(numberValue + 1).toLocaleString()}.`
}
export const priceFormat = (value: FieldValue) => (value ? Number(value).toLocaleString() : '-')
export const priceCurrencyFormat = (value: FieldValue) => (value ? `${Number(value).toLocaleString()}` : '-')
export const booleanFormat = (value: boolean | null) => (value ? 'Ano' : 'Ne')
export const roundedFormat = (value: number | null) => (value ? Number.parseFloat(value.toFixed(1)) : '-')
export const noneFormat = (value: FieldValue): ReactNode => {
	return value as ReactNode
}
export const upperCaseFormat = (value: FieldValue) => (value ? value.toString().toUpperCase() : '-')
export const displayOrderFormat = (value: FieldValue) => `${(Number(value) + 1).toLocaleString()}.`
