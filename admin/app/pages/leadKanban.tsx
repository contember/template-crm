import { Binding } from '~/lib/binding'
import { DefaultBoard } from '~/lib/board'
import { BackButton } from '~/lib/buttons'
import { Slots } from '~/lib/layout'
import { Button } from '~/lib/ui/button'
import { Component, EntityListSubTree, Field, HasOne, Link, PersistOnFieldChange, StaticRender, useEntityListSubTree } from '@contember/interface'
import { useBoardCurrentColumn } from '@contember/react-board'
import { createSelectOptions } from '../../utils/createSelectOptions'
import { leadStatusColorHex, leadStatusOptions } from '../../utils/enums'
import { dateFormat, priceCurrencyFormat } from '../../utils/format'
import { CirclePlus } from 'lucide-react'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-6">
					<Slots.Title>Deal flow</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<Slots.Actions>
						<Button variant="outline" className={'border-primary text-primary'}>
							Kanban
						</Button>
						<Link to="leadList">
							<Button variant="outline" className={'text-gray-400'}>
								List
							</Button>
						</Link>
						<div className="h-full border-l mx-4" />
						<Link to="leadCreate">
							<Button className="bg-primary hover:bg-primary-darker">
								<CirclePlus className="w-4 h-4 mr-2" /> Add lead
							</Button>
						</Link>
					</Slots.Actions>
					<div className="mt-2">
						<div className="flex gap-4 overflow-x-auto">
							<DefaultBoard
								entities="Lead"
								columns={createSelectOptions(leadStatusOptions)}
								columnHeader={<BoardColumnLabel />}
								discriminationField="status"
								sortableBy="displayOrder"
							>
								<PersistOnFieldChange field="status" />
								<div className="flex flex-col rounded-lg mb-3 shadow-sm border border-gray-100 hover:border-primary-lighter/60 transition-colors p-3">
									<Link to="leadDetail(id: $entity.id)">
										<span className="text-base font-bold cursor-pointer underline underline-offset-4 hover:no-underline text-primary-darker">
											<Field field="name" />
										</span>
									</Link>
									<div className="mt-1">
										<span className="text-xs font-bold text-primary">
											<Field field="amount" format={priceCurrencyFormat} />
										</span>
									</div>

									<div className="mt-2">
										<Field
											field="status"
											format={(status: string | null) => {
												if (!status || typeof status !== 'string') {
													return (
														<div className="px-2 py-0.5 rounded-full inline-block bg-gray-200 text-gray-600 text-xs">
															{leadStatusOptions[status as keyof typeof leadStatusOptions] || 'Unknown'}
														</div>
													)
												}

												const statusStyles: Record<string, { bg: string, text: string, border: string }> = {
													lead: { bg: 'bg-sky-200', text: 'text-sky-900', border: 'border-sky-200' },
													contacted: { bg: 'bg-sky-100', text: 'text-sky-800', border: 'border-sky-200' },
													qualified: { bg: 'bg-lime-200', text: 'text-lime-900', border: 'border-lime-200' },
													proposal: { bg: 'bg-lime-300', text: 'text-lime-900', border: 'border-lime-300' },
													negotiation: { bg: 'bg-amber-200', text: 'text-amber-900', border: 'border-amber-200' },
													contractSent: { bg: 'bg-amber-300', text: 'text-amber-900', border: 'border-amber-300' },
													won: { bg: 'bg-emerald-200', text: 'text-emerald-900', border: 'border-emerald-200' },
													lost: { bg: 'bg-red-200', text: 'text-red-900', border: 'border-red-200' },
													onHold: { bg: 'bg-gray-200', text: 'text-gray-800', border: 'border-gray-200' },
												};

												const style = statusStyles[status] || { bg: 'bg-gray-200', text: 'text-gray-600', border: 'border-gray-200' };

												return (
													<div className={`px-2 py-0.5 rounded-md inline-block text-xs font-medium border ${style.bg} ${style.text} ${style.border}`}>
														{leadStatusOptions[status as keyof typeof leadStatusOptions] || status}
													</div>
												)
											}}
										/>
									</div>

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
																			<span className={scoreColors[score as keyof typeof scoreColors] || ''}>
																				{score.charAt(0).toUpperCase() + score.slice(1)}
																			</span>
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

									<div className="mt-2 pt-2 border-t text-xs text-gray-500">
										<span>
											Created: <Field field="createdAt" format={dateFormat} />
										</span>
									</div>
								</div>
							</DefaultBoard>
						</div>
						<StaticRender>
							<EntityListSubTree entities="Lead" alias="allLeads">
								<Field field="status" />
								<Field field="amount" />
								<HasOne field="responsibleEmployee">
									<Field field="firstName" />
									<Field field="lastName" />
									<Field field="personId" />
								</HasOne>
								<Field field="closeDate" />
								<Field field="source" />
								<Field field="salesQualificationScore" />
								<Field field="nextActionDate" />
								<Field field="serviceType" />
								<Field field="decisionMakerIdentified" />
								<Field field="contractSent" />
								<Field field="createdAt" />
							</EntityListSubTree>
						</StaticRender>
					</div>
				</div>
			</Binding>
		</>
	)
}

export const BoardColumnLabel = Component(
	() => {
		const value = useBoardCurrentColumn().value as { value: string; label: string }
		const allLeads = Array.from(useEntityListSubTree('allLeads'))
		const allLeadsWithThisStatus = allLeads.filter(lead => {
			const status = lead.getField<string>('status').value
			return status !== null && status === value?.value
		})
		const leadsCount = allLeadsWithThisStatus.length

		const totalAmount = allLeadsWithThisStatus.reduce((acc, lead) => {
			const amount = lead.getField<number>('amount').value
			return acc + (amount !== null ? amount : 0)
		}, 0)
		const totalAmountFormatted = priceCurrencyFormat(totalAmount)
		
		// Get status styles based on value
		const getStatusStyle = (status: string) => {
			const statusStyles: Record<string, { bg: string, color: string }> = {
				lead: { bg: 'bg-sky-200', color: 'text-sky-900' },
				contacted: { bg: 'bg-sky-100', color: 'text-sky-800' },
				qualified: { bg: 'bg-lime-200', color: 'text-lime-900' },
				proposal: { bg: 'bg-lime-300', color: 'text-lime-900' },
				negotiation: { bg: 'bg-amber-200', color: 'text-amber-900' },
				contractSent: { bg: 'bg-amber-300', color: 'text-amber-900' },
				won: { bg: 'bg-emerald-200', color: 'text-emerald-900' },
				lost: { bg: 'bg-red-200', color: 'text-red-900' },
				onHold: { bg: 'bg-gray-200', color: 'text-gray-800' },
			};
			return statusStyles[status] || { bg: 'bg-gray-200', color: 'text-gray-600' };
		}

		// Get a simpler stage name without the slash
		const getSimplifiedStageName = (label: string) => {
			const parts = label.split(' / ')
			return parts[0]
		}

		const style = value && 'value' in value ? getStatusStyle(value.value as string) : { bg: 'bg-gray-200', color: 'text-gray-600' };

		return value && 'label' in value ? (
			<div className="flex flex-col pb-2 mb-3 border-b border-gray-300">
				<div className="flex items-center gap-2 mb-1">
					<div className={`rounded-full w-3 h-3 min-w-3 ${style.bg}`} />
					<div className={`font-medium ${style.color}`}>{getSimplifiedStageName(value.label)}</div>
					<div className="text-sm text-gray-500 ml-auto">{leadsCount}</div>
				</div>
				<div className="text-lg font-semibold text-primary-darker">{totalAmountFormatted}</div>
			</div>
		) : null
	},
	() => (
		<>
			<EntityListSubTree entities="Lead" alias="allLeads">
				<Field field="status" />
				<Field field="amount" />
			</EntityListSubTree>
		</>
	),
)
