import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Code2, Zap, Users, GitBranch, FileJson, Lock, Video } from "lucide-react"

const sections = [
  {
    title: "Dashboard",
    description: "User interface for managing promotions, campaigns, and viewing analytics in real-time.",
    icon: Code2,
    href: "/promotion-system/dashboard",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Engine",
    description: "Core promotion processing engine with validation, calculation, and application logic.",
    icon: Zap,
    href: "/promotion-system/engine",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Branching Strategy",
    description: "Git workflow, branch naming conventions, and deployment procedures for the promotion system.",
    icon: GitBranch,
    href: "/promotion-system/branching-strategy",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Postman Collection",
    description: "Complete API collection with examples, environment variables, and testing workflows.",
    icon: FileJson,
    href: "/promotion-system/postman-collection",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Users & Credentials",
    description: "System users, roles, permissions, and credential management for different environments.",
    icon: Lock,
    href: "/promotion-system/users-credentials",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Recorded Sessions",
    description: "Video tutorials, demos, and recorded training sessions for the promotion system.",
    icon: Video,
    href: "/promotion-system/recorded-sessions",
    color: "from-red-500 to-red-600",
  },
]

export default function PromotionSystemPage() {
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
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Promotion System</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Promotion System</h1>
                <p className="text-muted-foreground text-sm">
                  Complete documentation for the promotion engine and dashboard
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Overview</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                The Promotion System is a comprehensive platform designed to manage promotional campaigns, 
                customer segmentation, and real-time analytics. It consists of two main components:
              </p>
              <ul className="space-y-2 mt-4">
                <li>
                  <strong>Promotion Engine:</strong> Backend service built with Node.js that handles promotion 
                  validation, calculation, and application logic. It integrates with MongoDB for data persistence 
                  and uses advanced algorithms for customer segmentation.
                </li>
                <li>
                  <strong>Dashboard:</strong> React-based frontend application providing an intuitive interface 
                  for creating and managing campaigns, defining customer segments, and viewing detailed analytics.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-medium">Campaign Management</h3>
                <p className="text-sm text-muted-foreground">
                  Create, schedule, and manage promotional campaigns with support for various discount types, 
                  conditions, and customer targeting rules.
                </p>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-medium">Customer Segmentation</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced segmentation engine allowing complex customer grouping based on behavior, 
                  demographics, and transaction history.
                </p>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-medium">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive dashboards showing campaign performance, redemption rates, and revenue impact 
                  with real-time data updates.
                </p>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h3 className="font-medium">API Integration</h3>
                <p className="text-sm text-muted-foreground">
                  RESTful API with comprehensive endpoints for promotion validation, application, and 
                  transaction processing.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Technology Stack</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-sm">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Node.js</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Express</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">TypeScript</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">MongoDB</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Casbin</span>
                </div>
              </div>
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-sm">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">React</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Redux</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Material-UI</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Cypress</span>
                </div>
              </div>
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-sm">DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">Docker</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">docker-compose</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded-md font-medium">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Documentation Sections</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <a
                    key={section.title}
                    href={section.href}
                    className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative space-y-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} w-fit`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-semibold">{section.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-muted/30 rounded-xl p-6 border space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <a href="https://github.com/mo4tech/promotion_dashboard" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                → Dashboard Repository
              </a>
              <a href="https://github.com/mo4tech/promotion_engine" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                → Engine Repository
              </a>
              <a href="/promotion-system/postman-collection" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                → API Documentation
              </a>
              <a href="/promotion-system/users-credentials" className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                → Access & Credentials
              </a>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
