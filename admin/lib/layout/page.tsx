import { Binding } from '~/lib/binding'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout/slots'
import { EntitySubTree, EntitySubTreeProps } from '@contember/interface'
import { ReactNode } from 'react'

export const Page = ({ title, children, actions, ...entitySubTreeProps }: EntitySubTreeProps<any> & {
	title: ReactNode
	children: ReactNode
	actions?: ReactNode
}) => {
	return (
		<Binding>
			<Slots.Back>
				<BackButton />
			</Slots.Back>
			<EntitySubTree {...entitySubTreeProps}>
				{title && <Slots.Title>{title}</Slots.Title>}
				{actions && <Slots.Actions>{actions}</Slots.Actions>}
				{children}
			</EntitySubTree>
		</Binding>
	)
}
