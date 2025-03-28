import { dict } from '~/lib/dict'
import { InputField } from '~/lib/form'
import { useIntrospectionRolesConfig } from '~/lib/tenant'
import { ToastContent, useShowToast } from '~/lib/toast'
import { MembershipInput } from '@contember/graphql-client-tenant'
import { Component, EntityAccessor, Field, useEntityBeforePersist, useField, useInviteMutation } from '@contember/interface'
import { useProjectSlug } from '@contember/react-client'
import { useReferentiallyStableCallback } from '@contember/react-utils'
import { MailIcon } from 'lucide-react'

type FormValues = { email: string; name: string; memberships: MembershipInput[] }

const useInvitePerson = () => {
	const invite = useInviteMutation()
	const projectSlug = useProjectSlug()
	const showToast = useShowToast()

	return useReferentiallyStableCallback(async (getAccessor: EntityAccessor.GetEntityAccessor, values: FormValues) => {
		const response = await invite({
			email: values.email,
			name: values.name,
			projectSlug: projectSlug!,
			memberships: values.memberships,
		})

		return () => {
			if (!response.ok) {
				showToast(<ToastContent>{dict.tenant.invite.errorMessages[response.error] ?? dict.tenant.invite.errorMessages.UNKNOWN_ERROR}</ToastContent>, {
					type: 'error',
				})
				throw new Error(dict.tenant.invite.errorMessages[response.error] ?? dict.tenant.invite.errorMessages.UNKNOWN_ERROR)
			}

			getAccessor().getField('personId').updateValue(response.result.person.id)
		}
	})
}

export const PersonInviteForm = Component(
	() => {
		const projectSlug = useProjectSlug()
		const rolesResolved = useIntrospectionRolesConfig(projectSlug!)
		const invitePerson = useInvitePerson()

		const personIdField = useField<string>('personId')
		const emailField = useField<string>('email')
		const firstNameField = useField<string>('firstName')
		const lastNameField = useField<string>('lastName')
		const fullName = `${firstNameField.value} ${lastNameField.value}`
		// const roleField = useField<string>('role')

		useEntityBeforePersist(getAccessor => {
			return () => {
				if (!personIdField.valueOnServer) {
					return invitePerson(getAccessor, {
						email: emailField.value ?? '',
						name: fullName,
						memberships: [
							{
								// role: roleField.value ?? '',
								role: 'admin',
								variables: [],
							},
						],
					})
				}
			}
		})

		return (
			<>
				<form className="grid gap-4">
					<div className="flex max-w-md gap-6">
						<InputField field="firstName" label="First name" />
						<InputField field="lastName" label="Last name" />
					</div>
					<div className="relative">
						<div className="absolute left-3 top-8 text-gray-500 z-10">
							<MailIcon className="h-5 w-5" />
						</div>
						<InputField 
							field="email" 
							label="Email"
							inputProps={{
								className: 'pl-10 w-full',
							}}
						/>
					</div>
					{/*<RadioEnumField field="role" options={personRoleOptions} orientation="horizontal" label="Role" defaultValue="admin" />*/}
				</form>
			</>
		)
	},
	() => (
		<>
			<Field field="personId" />
			<Field field="email" />
			<Field field="firstName" />
			<Field field="lastName" />
			{/*<RadioEnumField field="role" options={personRoleOptions} orientation="horizontal" label="Role" defaultValue="admin" />*/}
		</>
	),
)
