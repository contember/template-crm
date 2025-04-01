import { Field } from '@contember/interface'
import { priceCurrencyFormat } from '~/utils/format'

export const BoardAmountView = () => {
	return (
		<div className="mt-1">
			<span className="text-xs font-bold text-primary">
				<Field field="amount" format={priceCurrencyFormat} />
			</span>
		</div>
	)
}
