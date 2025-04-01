import { Field, HasOne, Link } from '@contember/interface'

export const BoardProposalView = () => {
	return (
		<Field
			field="status"
			format={(status: string | null) => {
				if (status === 'qualified' || status === 'proposal' || status === 'negotiation') {
					return (
						<>
							<div className="mt-2 text-xs divide-y">
								<div className="flex justify-between py-1">
									<span className="text-gray-500">Close date:</span>
									<span>
										<Field field="closeDate" />
									</span>
								</div>

								<Field
									field="serviceType"
									format={(serviceType: string | null) => {
										if (!serviceType) return null
										return (
											<div className="flex justify-between py-1">
												<span className="text-gray-500">Service:</span>
												<span>{serviceType.replace(/([A-Z])/g, ' $1').trim()}</span>
											</div>
										)
									}}
								/>

								<Field
									field="decisionMakerIdentified"
									format={(identified: boolean | null) => {
										if (identified === null) return null
										return (
											<div className="flex justify-between py-1">
												<span className="text-gray-500">Decision maker:</span>
												<span className={identified ? 'text-emerald-600 font-medium' : 'text-red-600 font-medium'}>
													{identified ? 'Identified' : 'Not identified'}
												</span>
											</div>
										)
									}}
								/>

								<HasOne field="responsibleEmployee">
									<Link to="employeeDetail(personId: $entity.personId)">
										<div className="flex justify-between py-1">
											<span className="text-gray-500">Employee:</span>
											<span className="underline underline-offset-2 hover:no-underline cursor-pointer text-primary-darker">
												<Field field="firstName" /> <Field field="lastName" />
											</span>
										</div>
									</Link>
								</HasOne>
							</div>
						</>
					)
				}
				return null
			}}
		/>
	)
}
