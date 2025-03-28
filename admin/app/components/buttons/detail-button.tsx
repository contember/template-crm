import { Button } from '~/lib/ui/button'
import { Component } from '@contember/interface'
import { Link } from '@contember/react-routing'
import { EyeIcon, PencilLineIcon } from 'lucide-react'

export const DetailButton = Component(({ to }: { to: string }) => {
	return (
		<Link to={to}>
			<Button size="sm" variant="outline" className="hover:bg-primary-lighter/20 hover:border-primary/50">
				<EyeIcon className="w-4 h-4" />
			</Button>
		</Link>
	)
})

export const EditButton = Component(({ to }: { to: string }) => {
	return (
		<Link to={to}>
			<Button size="sm" variant="outline" className="hover:bg-primary-lighter/20 hover:border-primary/50">
				<PencilLineIcon className="w-4 h-4" />
			</Button>
		</Link>
	)
})
