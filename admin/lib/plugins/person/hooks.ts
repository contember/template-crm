// import { useShowToast } from '~/lib/toast'
// import * as TenantApi from '@contember/graphql-client-tenant'
// import { useProjectSlug } from '@contember/react-client'
// import { useTenantApi, useUpdateProjectMemberMutation } from '@contember/react-client-tenant'
// import { useCallback } from 'react'
//
// export type ChangeMyProfileVariables = { email: string; name?: string } | { email?: string; name: string }
//
// const changeMyProfileFetcher = TenantApi.changeMyProfileResponse$$.error(TenantApi.changeMyProfileError$$)
//
// export const useChangeMyProfile = () => {
// 	const api = useTenantApi()
//
// 	return useCallback(
// 		async (variables: ChangeMyProfileVariables) => {
// 			return (
// 				await api(TenantApi.mutation$.changeMyProfile(changeMyProfileFetcher), {
// 					variables,
// 				})
// 			).changeMyProfile
// 		},
// 		[api],
// 	)
// }
//
// export const useUpdateProjectMemberPerson = (
// 	identityId: string | null,
// 	memberships:
// 		| {
// 				label: string
// 				value: string
// 		  }[]
// 		| undefined,
// ) => {
// 	const updateMember = useUpdateProjectMemberMutation()
// 	const project = useProjectSlug()
// 	const toast = useShowToast()
//
// 	return useCallback(async () => {
// 		if (!identityId || !memberships) {
// 			return
// 		}
//
// 		const result = await updateMember({
// 			identityId,
// 			projectSlug: project!,
// 			memberships: memberships.map(it => ({
// 				role: it.value,
// 				variables: [],
// 			})),
// 		})
//
// 		if (!result.ok) {
// 			toast(`Unable to update member: ${result.error}`, {
// 				type: 'error',
// 			})
// 			return
// 		}
//
// 		return () => null
// 	}, [updateMember, memberships, project, toast, identityId])
// }
//
// export const useRemoveProjectMemberPerson = (identityId: string | null) => {
// 	const updateMember = useUpdateProjectMemberMutation()
// 	const project = useProjectSlug()
// 	const toast = useShowToast()
//
// 	return useCallback(async () => {
// 		if (!identityId) {
// 			return
// 		}
//
// 		const result = await updateMember({
// 			identityId,
// 			projectSlug: project!,
// 			memberships: [],
// 		})
//
// 		if (!result.ok) {
// 			toast(`Unable to update member: ${result.error}`, {
// 				type: 'error',
// 			})
// 			return
// 		}
//
// 		return () => null
// 	}, [updateMember, project, toast, identityId])
// }

