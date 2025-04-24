"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  LayoutDashboard,
  Users,
  Activity,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react"
import { motion } from "framer-motion"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard")

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Programs", icon: <Activity className="w-5 h-5" /> },
    { name: "Activities", icon: <Activity className="w-5 h-5" /> },
    { name: "Users", icon: <Users className="w-5 h-5" /> },
    { name: "Forums", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Finances", icon: <DollarSign className="w-5 h-5" /> },
    { name: "Rewards", icon: <Award className="w-5 h-5" /> },
    { name: "Analytics", icon: <BarChart2 className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
    { name: "Log Out", icon: <LogOut className="w-5 h-5" /> },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${open ? "block" : "hidden"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-purple-900 text-white z-30 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-purple-800">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Techrity Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="font-semibold text-lg">techrity</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden p-2 rounded-md text-white hover:bg-purple-800"
            aria-label="Close sidebar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-4 px-2" aria-label="Main Navigation">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="#"
                  className={`flex items-center px-4 py-3 text-sm rounded-md ${
                    activeItem === item.name ? "bg-white text-purple-900 font-medium" : "text-white hover:bg-purple-800"
                  }`}
                  onClick={() => setActiveItem(item.name)}
                  aria-current={activeItem === item.name ? "page" : undefined}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
          <div className="bg-purple-800 rounded-md p-3 text-sm">
            <div className="flex items-center mb-2">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>Got some questions, enquiries or need help?</span>
            </div>
            <button className="text-xs bg-purple-900 hover:bg-purple-950 py-1 px-2 rounded w-full">
              Get Mently Help Desk Here
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span>Switch to Classic Mode</span>
            <div className="w-10 h-5 bg-purple-700 rounded-full flex items-center p-0.5">
              <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
