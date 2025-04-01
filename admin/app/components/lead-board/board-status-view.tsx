import { Field } from '@contember/interface'
import { leadStatusOptions } from '~/utils/enums'

export const BoardStatusView = () => {
	return (
		<div className="mt-2">
			<Field
				field="status"
				format={(status: string | null) => {
					if (!status || typeof status !== 'string') {
						return (
							<div className="px-2 py-0.5 rounded-full inline-block bg-gray-200 text-gray-600 text-xs">
								{leadStatusOptions[status as keyof typeof leadStatusOptions] || 'Unknown'}
							</div>
						)
					}

					const statusStyles: Record<string, { bg: string; text: string; border: string }> = {
						lead: { bg: 'bg-sky-200', text: 'text-sky-900', border: 'border-sky-200' },
						contacted: { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-sky-200' },
						qualified: { bg: 'bg-lime-200', text: 'text-lime-900', border: 'border-lime-200' },
						proposal: { bg: 'bg-lime-300', text: 'text-lime-900', border: 'border-lime-300' },
						negotiation: { bg: 'bg-amber-200', text: 'text-amber-900', border: 'border-amber-200' },
						contractSent: { bg: 'bg-amber-300', text: 'text-amber-900', border: 'border-amber-300' },
						won: { bg: 'bg-emerald-200', text: 'text-emerald-900', border: 'border-emerald-200' },
						lost: { bg: 'bg-red-200', text: 'text-red-900', border: 'border-red-200' },
						onHold: { bg: 'bg-gray-200', text: 'text-gray-800', border: 'border-gray-200' },
					}

					const style = statusStyles[status] || { bg: 'bg-gray-200', text: 'text-gray-600', border: 'border-gray-200' }

					return (
						<div className={`px-2 py-0.5 rounded-md inline-block text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}>
							{leadStatusOptions[status as keyof typeof leadStatusOptions] || status}
						</div>
					)
				}}
			/>
		</div>
	)
}
