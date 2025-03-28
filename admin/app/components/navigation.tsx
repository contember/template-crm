import { Menu, MenuItem } from '~/lib/ui/menu'
import { Component, HasRole, identityEnvironmentExtension, Link, LogoutTrigger, useIdentity } from '@contember/interface'
import { BadgeCheckIcon, BellIcon, BriefcaseIcon, BuildingIcon, ChevronsUpDown, CogIcon, GitBranchIcon, GlobeIcon, LogOutIcon, TargetIcon, UserIcon, UsersIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/lib/ui/dropdown'
import { SidebarMenuButton } from '~/lib/ui/sidebar'
import { Avatar, AvatarFallback } from '~/lib/ui/avatar'
import { AnchorButton, Button } from '~/lib/ui/button'
import { useIsMobile } from '~/lib/utils/use-mobile'

export const Navigation = Component((props, env) => {
	const personId = env.getExtension(identityEnvironmentExtension).identity?.person?.id
	return (
		<Menu>
			<MenuItem label="Deal flow" icon={<TargetIcon className="text-primary" />} to="leadKanban" />
			<MenuItem label="Contacts" icon={<UsersIcon className="text-primary" />} to="contactList" />
			<MenuItem label="Companies" icon={<BuildingIcon className="text-primary" />} to="companyList" />
			<MenuItem label="Settings" icon={<CogIcon className="text-primary" />}>
				<MenuItem label="Branches" icon={<GitBranchIcon className="text-primary" />} to="branchList" />
				<MenuItem label="Employees" icon={<BriefcaseIcon className="text-primary" />} to="employeeList" />
				<MenuItem label="My profile" icon={<UserIcon className="text-primary" />} to={`employeeDetail(personId:'${personId}')`} />
				<MenuItem label="Countries and regions" icon={<GlobeIcon className="text-primary" />} to="settingsCountries" />
			</MenuItem>
		</Menu>
	)
})


export const UserNavigation = () => {
	const isMobile = useIsMobile()
	const identity = useIdentity()

	const userEmail = identity?.person?.email
	const userInitial = userEmail?.substr(0, 1).toLocaleUpperCase()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
					<Avatar className="icon h-6 w-6 rounded-lg">
						<AvatarFallback avatarFallbackColorString={userEmail} className="rounded-lg">
							{userInitial}
						</AvatarFallback>
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">{userEmail}</span>
					</div>
					<ChevronsUpDown className="ml-auto size-4" />
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
				side={isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 pl-3 pr-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarFallback avatarFallbackColorString={userEmail} className="rounded-lg">
								{userInitial}
							</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">{userEmail}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Link to="tenant/security">
							<AnchorButton variant="ghost" size="xs" className="flex gap-2">
								<BadgeCheckIcon size={16} />
								Change password
							</AnchorButton>
						</Link>
					</DropdownMenuItem>
					<HasRole role="admin">
						<DropdownMenuItem>
							<Link to="tenant/apiKeys">
								<AnchorButton variant="ghost" size="xs" className="flex gap-2">
									<BellIcon size={16} />
									API keys
								</AnchorButton>
							</Link>
						</DropdownMenuItem>
					</HasRole>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogoutTrigger>
						<Button variant="ghost" size="xs" className="flex gap-2">
							<LogOutIcon size={16} /> Logout
						</Button>
					</LogoutTrigger>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
