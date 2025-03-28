import { formatImageResizeUrl } from '~/lib/images'
import { cn } from '~/lib/utils/cn'
import { Component, FieldView } from '@contember/react-binding'

type ImageFieldViewProps = {
	className?: string
	field: string
	alt?: string
	width?: number
	height?: number
}
export const ImageFieldView = Component<ImageFieldViewProps>(props => {
	return (
		<FieldView
			field={props.field}
			render={field => {
				const src = field.value as string | null
				if (!src) {
					return null
				}
				if (props.width && props.height) {
					return <img className={cn(props.className)} src={formatImageResizeUrl(src, { width: props.width, height: props.height })} alt={props.alt} />
				}
				return <img className={cn(props.className)} src={src} alt={props.alt} />
			}}
		/>
	)
})
