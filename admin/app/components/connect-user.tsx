import { ConnectEntity } from '~/app/components/connect-entity'
import { Component, EntitySubTree, identityEnvironmentExtension } from '@contember/interface'
import { ReactNode } from 'react'

export const ConnectUser = Component<{ field: string; children?: ReactNode }>(({ field, children }, environment) => {
	return (
		<ConnectEntity
			field={field}
			entity="Person"
			where={`(personId='${environment.getExtension(identityEnvironmentExtension).identity?.person?.id}')`}
			children={children}
		/>
	)
}, 'ConnectUser')

export const ConnectUserStatic = Component<{ children?: ReactNode }>(
	() => null,
	({ children }, environment) => {
		return (
			<EntitySubTree
				entity={{ entityName: 'Person', where: `(personId='${environment.getExtension(identityEnvironmentExtension).identity?.person?.id}')` }}
				alias="currentUser"
			>
				{children}
			</EntitySubTree>
		)
	},

	'ConnectUser',
)
