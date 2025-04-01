import { Field, HasOne, Link } from '@contember/interface'

export const BoardStatusLeadView = () => {
	return (
		<Field
			field="status"
			format={(status: string | null) => {
				if (status === 'lead' || status === 'contacted') {
					return (
						<>
							<div className="mt-2 text-xs divide-y">
								<div className="flex justify-between py-1">
									<span className="text-gray-500">Source:</span>
									<span>
										<Field field="source" />
									</span>
								</div>

								<Field
									field="salesQualificationScore"
									format={(score: string | null) => {
										if (!score) return null
										const scoreColors = {
											high: 'text-emerald-600 font-medium',
											medium: 'text-amber-600 font-medium',
											low: 'text-red-600 font-medium',
										}
										return (
											<div className="flex justify-between py-1">
												<span className="text-gray-500">Score:</span>
												<span className={scoreColors[score as keyof typeof scoreColors] || ''}>{score.charAt(0).toUpperCase() + score.slice(1)}</span>
											</div>
										)
									}}
								/>

								<div className="flex justify-between py-1">
									<span className="text-gray-500">Next action:</span>
									<span>
										<Field field="nextActionDate" />
									</span>
								</div>

								<HasOne field="responsibleEmployee">
									<Link to="employeeDetail(personId: $entity.personId)">
										<div className="flex justify-between py-1">
											<span className="text-gray-500">Owner:</span>
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
