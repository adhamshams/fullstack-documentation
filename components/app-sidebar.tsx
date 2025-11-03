"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Bot } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Botit documentation structure
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      items: [],
    },
    {
      title: "Promotion System",
      url: "/promotion-system",
      items: [
        {
          title: "Overview",
          url: "/promotion-system",
        },
        {
          title: "Dashboard",
          url: "/promotion-system/dashboard",
        },
        {
          title: "Engine",
          url: "/promotion-system/engine",
        },
        {
          title: "Branching Strategy",
          url: "/promotion-system/branching-strategy",
        },
        {
          title: "Postman Collection",
          url: "/promotion-system/postman-collection",
        },
        {
          title: "Users & Credentials",
          url: "/promotion-system/users-credentials",
        },
        {
          title: "Recorded Sessions",
          url: "/promotion-system/recorded-sessions",
        },
      ],
    },
    {
      title: "Notification System",
      url: "#",
      items: [
        {
          title: "Getting Started",
          url: "#",
        },
        {
          title: "Email Templates",
          url: "#",
        },
        {
          title: "SMS Configuration",
          url: "#",
        },
        {
          title: "Push Notifications",
          url: "#",
        },
        {
          title: "API Reference",
          url: "#",
        },
        {
          title: "Delivery Tracking",
          url: "#",
        },
      ],
    },
    {
      title: "Dittofeed",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Configuration",
          url: "#",
        },
        {
          title: "Workflows",
          url: "#",
        },
        {
          title: "Integration Guide",
          url: "#",
        },
      ],
    },
    {
      title: "NocoDB",
      url: "#",
      items: [
        {
          title: "Setup",
          url: "#",
        },
        {
          title: "Database Configuration",
          url: "#",
        },
        {
          title: "API Usage",
          url: "#",
        },
        {
          title: "Deployment",
          url: "#",
        },
      ],
    },
    {
      title: "Language Panel",
      url: "#",
      items: [
        {
          title: "Getting Started",
          url: "#",
        },
        {
          title: "Backend API",
          url: "#",
        },
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Docker Setup",
          url: "#",
        },
      ],
    },
    {
      title: "Fleetbase",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Fleet Management",
          url: "#",
        },
        {
          title: "API Documentation",
          url: "#",
        },
        {
          title: "Integration",
          url: "#",
        },
      ],
    },
    {
      title: "Development",
      url: "#",
      items: [
        {
          title: "Setup Guide",
          url: "#",
        },
        {
          title: "Coding Standards",
          url: "#",
        },
        {
          title: "Git Workflow",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
      ],
    },
    {
      title: "Operations",
      url: "#",
      items: [
        {
          title: "Docker & Containers",
          url: "#",
        },
        {
          title: "Monitoring",
          url: "#",
        },
        {
          title: "CI/CD Pipelines",
          url: "#",
        },
        {
          title: "Troubleshooting",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Bot className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Botit</span>
                  <span className="text-xs">Full Stack Team</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.url
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild isActive={isSubActive}>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
