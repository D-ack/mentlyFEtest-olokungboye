"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import WelcomeHeader from "./welcome-header"
import ProgramsSection from "./programs-section"
import UsersSection from "./users-section"
import ApplicationsSection from "./applications-section"
import MentorsSection from "./mentors-section"
import RecentActivitiesSection from "./recent-activities-section"
import ManageWidgetModal from "./manage-widget-modal"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [manageWidgetOpen, setManageWidgetOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Open sidebar"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            <WelcomeHeader onManageWidgets={() => setManageWidgetOpen(true)} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 space-y-6">
              <ProgramsSection />
              <ApplicationsSection />
              <MentorsSection />
              <RecentActivitiesSection />
            </div>
            <div className="space-y-6">
              <UsersSection />
            </div>
          </div>
        </main>
      </div>

      {manageWidgetOpen && <ManageWidgetModal onClose={() => setManageWidgetOpen(false)} />}
    </div>
  )
}
