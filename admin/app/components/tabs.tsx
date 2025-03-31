import { Component } from '@contember/interface'

export const TabButton = Component<{ id: string; icon: React.ReactNode; label: string; defaultActive?: boolean }>(
	({ id, icon, label, defaultActive }) => (
		<button
			className={`tab-button px-4 py-3 font-medium flex items-center gap-2 border-b-2 ${defaultActive ? 'border-primary text-primary-darker' : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'}`}
			data-tab={id}
			onClick={() => {
				const tabButtons = document.querySelectorAll('.tab-button')
				for (const btn of tabButtons) {
					btn.classList.remove('border-primary', 'text-primary-darker')
					btn.classList.add('border-transparent', 'text-gray-600')
				}

				const tabContents = document.querySelectorAll('.tab-content')
				for (const content of tabContents) {
					content.classList.add('hidden')
				}

				const button = document.querySelector(`[data-tab="${id}"]`)
				button?.classList.add('border-primary', 'text-primary-darker')
				button?.classList.remove('border-transparent', 'text-gray-600')
				document.querySelector(`#tab-content-${id}`)?.classList.remove('hidden')
			}}
		>
			{icon}
			{label}
		</button>
	),
)

export const TabContent = Component<{ id: string; children: React.ReactNode }>(({ id, children }) => (
	<div id={`tab-content-${id}`} className={`tab-content ${id === 'overview' ? '' : 'hidden'}`}>
		{children}
	</div>
))
