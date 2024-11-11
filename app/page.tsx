'use client'

import { useState } from 'react'
import { Bell, ChevronDown, Layout, BarChart, Users, Settings, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminDashboard() {
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
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
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
            <h2 className="text-3xl font-bold">Welcome, Admin</h2>
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

          {/* Dashboard content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>Active users on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">1,234</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue</CardTitle>
                <CardDescription>Total revenue this month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">$12,345</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>New Sign-ups</CardTitle>
                <CardDescription>Users joined in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">78</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}