"use client"

import { useState, useEffect } from "react"
import { Bell, ChevronDown, Layout, BarChart, Users, Settings, LogOut } from 'lucide-react'
import {Button} from "@/components/ui/button"
import { Card,CardContent } from "@/components/ui/card"
import {Avatar, AvatarFallback,AvatarImage} from "@/components/ui/avatar"
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


const fetchLineChartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Jan', users: 'Input users here', revenue: 'input revenue here' },
        { name: 'Feb', users: 3000, revenue: 1398 },
        { name: 'Mar', users: 2000, revenue: 9800 },
        { name: 'Apr', users: 2780, revenue: 3908 },
        { name: 'May', users: 1890, revenue: 4800 },
        { name: 'Jun', users: 2390, revenue: 3800 },
      ])
    }, 1000)
  })
}


const fetchBarChartData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'Product A', sales: 4000, returns: 400 },
        { name: 'Product B', sales: 3000, returns: 500 },
        { name: 'Product C', sales: 2000, returns: 300 },
        { name: 'Product D', sales: 2780, returns: 900 },
        { name: 'Product E', sales: 1890, returns: 200 },
      ])
    }, 1000)
  })
}

export default function AnalyticsPage() {
  
}