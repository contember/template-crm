import { Field, HasOne, Link } from '@contember/interface'

export const BoardWonView = () => {
	return (
		<Field
			field="status"
			format={(status: string | null) => {
				if (!status) return null

				if (status === 'contractSent' || status === 'won' || status === 'lost' || status === 'onHold') {
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
									field="contractSent"
									format={(sent: boolean | null) => {
										if (sent === null) return null
										return (
											<div className="flex justify-between py-1">
												<span className="text-gray-500">Contract:</span>
												<span className={sent ? 'text-emerald-600 font-medium' : 'text-amber-500 font-medium'}>{sent ? 'Sent' : 'Not sent'}</span>
											</div>
										)
									}}
								/>

								<div className="flex justify-between py-1">
									<span className="text-gray-500">Status:</span>
									<span>
										{status === 'won' && <span className="text-emerald-600 font-medium">Won! 🎉</span>}
										{status === 'lost' && <span className="text-red-600 font-medium">Lost</span>}
										{status === 'onHold' && <span className="text-amber-600 font-medium">On hold</span>}
									</span>
								</div>

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
