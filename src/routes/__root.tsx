import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<SidebarProvider>
				<Sidebar />
				<main>
					<SidebarTrigger />
					<Outlet />
				</main>
			</SidebarProvider>
			<TanStackRouterDevtools />
		</>
	);
}
