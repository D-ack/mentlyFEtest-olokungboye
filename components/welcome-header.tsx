"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface WelcomeHeaderProps {
  onManageWidgets: () => void
}

export default function WelcomeHeader({ onManageWidgets }: WelcomeHeaderProps) {
  return (
    <>
      <div className="flex justify-end mb-4">
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-purple-600 bg-white rounded-lg px-4 py-2 shadow-sm hover:bg-gray-50"
          onClick={onManageWidgets}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="4" y="15" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="15" y="4" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="15" y="15" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-medium">Manage Widgets</span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-600 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white">Welcome Aboard, Blessing 👋</h2>
          <p className="text-sm text-white opacity-90">We&apos;re thrilled to have you join Techrity Team!</p>
        </div>
        <div>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Update Profile</Button>
        </div>
      </motion.div>
    </>
  )
}
