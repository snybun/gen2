import { Home, Users, FileText, Lightbulb, BookOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Our Profiles", url: "/profiles", icon: Users },
  { title: "The Issue", url: "/analysis", icon: FileText },
  { title: "Solutions", url: "/solutions", icon: Lightbulb },
  { title: "Sources", url: "/sources", icon: BookOpen },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarContent>
        <div className="p-6 border-b border-border">
          <h2 className="font-handwritten text-3xl text-primary font-bold">
            GEN 002
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Political Consciousness & Well-Being
          </p>
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="font-handwritten text-lg">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-muted"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-Arial">
            group numero dos:pp
          </p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
