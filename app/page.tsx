import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Code2, Database, Globe, Languages, Truck, Bell, Shield, Github, BookOpen } from "lucide-react"

const projects = [
  {
    name: "Promotion System",
    description: "Advanced promotion engine with campaign management, customer segmentation, and real-time analytics dashboard.",
    icon: Code2,
    status: "Active Development",
    tech: ["Node.js", "React", "MongoDB", "Docker"],
    color: "from-red-500 to-red-600",
  },
  {
    name: "Notification System",
    description: "Multi-channel notification service for email, SMS, and push notifications with template management and delivery tracking.",
    icon: Bell,
    status: "Active Development",
    tech: ["Node.js", "React", "Redis", "Docker"],
    color: "from-red-500 to-red-600",
  },
  {
    name: "Dittofeed",
    description: "Open-source customer engagement platform for marketing automation and customer communication workflows.",
    icon: Globe,
    status: "Integration",
    tech: ["TypeScript", "React", "PostgreSQL"],
    color: "from-red-500 to-red-600",
  },
  {
    name: "NocoDB",
    description: "Smart spreadsheet interface for databases, providing an Airtable alternative with powerful API capabilities.",
    icon: Database,
    status: "Deployment",
    tech: ["Vue.js", "Node.js", "MySQL"],
    color: "from-red-500 to-red-600",
  },
  {
    name: "Language Panel",
    description: "Multilingual content management system with translation workflows and localization support.",
    icon: Languages,
    status: "Active Development",
    tech: ["React", "Node.js", "Docker", "Vite"],
    color: "from-red-500 to-red-600",
  },
  {
    name: "Fleetbase",
    description: "Fleet management and logistics platform for delivery operations, route optimization, and real-time tracking.",
    icon: Truck,
    status: "Integration",
    tech: ["Ember.js", "Laravel", "PostgreSQL"],
    color: "from-red-500 to-red-600",
  },
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome to Botit Documentation
            </h1>
            <p className="text-muted-foreground text-base max-w-3xl">
              Technical documentation for all projects managed by the Full Stack Team. 
              This hub provides comprehensive guides, API references, and deployment instructions 
              for our suite of enterprise solutions.
            </p>
          </div>

          {/* Security Notice */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-red-500">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-red-900 dark:text-red-100">Security & Confidentiality</h3>
                <p className="text-sm text-red-800 dark:text-red-200 leading-relaxed">
                  This documentation contains sensitive information about our internal systems.
                  Never share API keys, credentials, or access tokens in documentation, 
                  commits, or public channels. All secrets must be stored in environment variables or secure vaults. 
                  If you discover exposed credentials, immediately rotate them and notify the team.
                </p>
              </div>
            </div>
          </div>

          {/* Documentation Maintenance Notice */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-blue-500">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Documentation Maintenance</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  Please maintain this documentation as you work on projects. 
                  Every feature addition, architecture change, or deployment update should be reflected here. 
                  Future teams depend on accurate, up-to-date documentation to understand 
                  our systems, troubleshoot issues, and continue development efficiently. When you discover outdated information, 
                  take a moment to update it. Your contributions will save countless hours for your colleagues and successors. 
                  Documentation is not just a deliverable, it's a responsibility we owe to each other and to the future of these projects.
                </p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon
                return (
                  <div
                    key={project.name}
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    
                    <div className="relative space-y-4">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-muted px-2 py-1 rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
            
          {/* About This Documentation */}
          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">About This Documentation</h3>
                <p className="text-muted-foreground text-xs">
                  Built with <strong>Next.js 16</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, 
                  <strong> Tailwind CSS 4</strong>, <strong>shadcn/ui</strong>, and <strong>MDX</strong> for rich content authoring.
                </p>
              </div>
              <a 
                href="https://github.com/mo4tech/promotion_dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:underline text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
