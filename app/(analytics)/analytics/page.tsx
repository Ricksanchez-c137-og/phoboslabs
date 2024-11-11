'use client'

import { useState } from 'react'
import { Bell, ChevronDown, Layout, BarChart, Users, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const lineChartData = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 3000, revenue: 1398 },
  { name: 'Mar', users: 2000, revenue: 9800 },
  { name: 'Apr', users: 2780, revenue: 3908 },
  { name: 'May', users: 1890, revenue: 4800 },
  { name: 'Jun', users: 2390, revenue: 3800 },
]

const barChartData = [
  { name: 'Product A', sales: 4000, returns: 400 },
  { name: 'Product B', sales: 3000, returns: 500 },
  { name: 'Product C', sales: 2000, returns: 300 },
  { name: 'Product D', sales: 2780, returns: 900 },
  { name: 'Product E', sales: 1890, returns: 200 },
]

export default function AnalyticsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-card text-card-foreground p-4">
          <div className="flex items-center mb-8">
            <Layout className="mr-2" />
            <h1 className="text-lg font-semibold">Analytics</h1>
          </div>
          <nav>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Layout className="mr-2" /> Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <BarChart className="mr-2" /> Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Users className="mr-2" /> Users
            </Button>
            <Button variant="ghost" className="w-full justify-start mb-2">
              <Settings className="mr-2" /> Settings
            </Button>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Analytics Overview</h2>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? '🌙' : '☀️'}
              </Button>
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarImage src="/placeholder-avatar.jpg" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    Admin User
                    <ChevronDown className="ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Analytics content */}
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">User Growth and Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Product Sales and Returns</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsBarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#8884d8" />
                        <Bar dataKey="returns" fill="#82ca9d" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </main>
      </div>
    </div>
  )
}