import { Component, EntityListSubTree, Field, useEntityListSubTree } from '@contember/interface'
import { useBoardCurrentColumn } from '@contember/react-board'
import { priceCurrencyFormat } from '~/utils/format'

export const BoardColumnLabel = Component(
	() => {
		const value = useBoardCurrentColumn().value as { value: string; label: string }
		const allLeads = Array.from(useEntityListSubTree('allLeads'))
		const allLeadsWithThisStatus = allLeads.filter(lead => {
			const status = lead.getField<string>('status').value
			return status !== null && status === value?.value
		})
		const leadsCount = allLeadsWithThisStatus.length

		const totalAmount = allLeadsWithThisStatus.reduce((acc, lead) => {
			const amount = lead.getField<number>('amount').value
			return acc + (amount !== null ? amount : 0)
		}, 0)
		const totalAmountFormatted = priceCurrencyFormat(totalAmount)

		// Get status styles based on value
		const getStatusStyle = (status: string) => {
			const statusStyles: Record<string, { bg: string; color: string }> = {
				lead: { bg: 'bg-sky-200', color: 'text-sky-900' },
				contacted: { bg: 'bg-sky-100', color: 'text-sky-800' },
				qualified: { bg: 'bg-lime-200', color: 'text-lime-900' },
				proposal: { bg: 'bg-lime-300', color: 'text-lime-900' },
				negotiation: { bg: 'bg-amber-200', color: 'text-amber-900' },
				contractSent: { bg: 'bg-amber-300', color: 'text-amber-900' },
				won: { bg: 'bg-emerald-200', color: 'text-emerald-900' },
				lost: { bg: 'bg-red-200', color: 'text-red-900' },
				onHold: { bg: 'bg-gray-200', color: 'text-gray-800' },
			}
			return statusStyles[status] || { bg: 'bg-gray-200', color: 'text-gray-600' }
		}

		// Get a simpler stage name without the slash
		const getSimplifiedStageName = (label: string) => {
			const parts = label.split(' / ')
			return parts[0]
		}

		const style = value && 'value' in value ? getStatusStyle(value.value as string) : { bg: 'bg-gray-200', color: 'text-gray-600' }

		return value && 'label' in value ? (
			<div className="flex flex-col pb-2 mb-3 border-b border-gray-300">
				<div className="flex items-center gap-2 mb-1">
					<div className={`rounded-full w-3 h-3 min-w-3 ${style.bg}`} />
					<div className={`font-medium ${style.color}`}>{getSimplifiedStageName(value.label)}</div>
					<div className="text-sm text-gray-500 ml-auto">{leadsCount}</div>
				</div>
				<div className="text-lg font-semibold text-primary-darker">{totalAmountFormatted}</div>
			</div>
		) : null
	},
	() => (
		<>
			<EntityListSubTree entities="Lead" alias="allLeads">
				<Field field="status" />
				<Field field="amount" />
			</EntityListSubTree>
		</>
	),
)
