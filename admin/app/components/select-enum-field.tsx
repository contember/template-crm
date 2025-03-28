import { FormContainer, FormContainerProps } from '~/lib/form'
import { SelectDefaultPlaceholderUI, SelectInputActionsUI, SelectInputUI, SelectListItemUI, SelectPopoverContent } from '~/lib/select'
import { Popover, PopoverTrigger } from '~/lib/ui/popover'
import { Component, Field, SugaredRelativeSingleField, useField } from '@contember/interface'
import { FormFieldScope } from '@contember/react-form'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'

export type SelectEnumFieldProps = Omit<FormContainerProps, 'children'> & {
	field: SugaredRelativeSingleField['field']
	options: Record<string, ReactNode>
	placeholder?: ReactNode
	defaultValue?: string
}

export const SelectEnumField = Component<SelectEnumFieldProps>(
	({ field, label, description, options, placeholder }) => {
		const [open, setOpen] = useState(false)
		const fieldAccessor = useField<string>(field)

		return (
			<FormFieldScope field={field}>
				<FormContainer description={description} label={label}>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<SelectInputUI>
								{fieldAccessor.value ? options[fieldAccessor.value] : (placeholder ?? <SelectDefaultPlaceholderUI />)}
								<div className="relative ml-auto">
									<SelectInputActionsUI>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</SelectInputActionsUI>
								</div>
							</SelectInputUI>
						</PopoverTrigger>
						<SelectPopoverContent>
							{Object.entries(options).map(([value, label]) => (
								<SelectListItemUI
									key={value}
									onClick={() => {
										fieldAccessor.updateValue(value)
										setOpen(false)
									}}
								>
									{label}
								</SelectListItemUI>
							))}
						</SelectPopoverContent>
					</Popover>
				</FormContainer>
			</FormFieldScope>
		)
	},
	({ field, defaultValue }) => <Field field={field} defaultValue={defaultValue} />,
	'SelectEnumField',
)
