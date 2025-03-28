import { ImageFieldView } from '~/app/components/field-views/image-field-view'
import { Component, Field, useField } from '@contember/interface'
import { ImageOff, UserRound } from 'lucide-react'

export const ProfilePictureFieldView = Component(
	({ urlField, className }: { urlField: string; className?: string }) => {
		const imageUrl = useField<string>(urlField).value

		if (imageUrl === null || imageUrl === '') {
			return (
				<div className={`h-8 w-8 object-contain border rounded-full p-1 bg-gray-100 flex items-center justify-around  flex-shrink-0 ${className}`}>
					<UserRound className="h-4 w-4 text-gray-500" />
				</div>
			)
		}

		return <ImageFieldView field="profilePicture.image.url" className="h-8 w-8 object-cover rounded-full  flex-shrink-0" width={300} height={300} />
	},
	props => (
		<>
			<Field field={props.urlField} />
		</>
	),
	'ImageFieldView',
)
