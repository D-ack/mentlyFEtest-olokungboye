"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ManageWidgetModalProps {
  onClose: () => void
}

export default function ManageWidgetModal({ onClose }: ManageWidgetModalProps) {
  const [widgets, setWidgets] = useState([
    { id: "programs", label: "Programs", checked: true },
    { id: "groupCalls", label: "Group Calls", checked: true },
    { id: "mentors", label: "Mentors", checked: true },
    { id: "recentActivities", label: "Recent Activities", checked: true },
    { id: "application", label: "Application", checked: true },
    { id: "earnings", label: "Earnings", checked: false },
    { id: "forum", label: "Forum", checked: false },
    { id: "programAnalysis", label: "Program Analysis", checked: false },
  ])

  const handleToggleWidget = (id: string) => {
    setWidgets(widgets.map((widget) => (widget.id === id ? { ...widget, checked: !widget.checked } : widget)))
  }

  const handleResetToDefault = () => {
    setWidgets([
      { id: "programs", label: "Programs", checked: true },
      { id: "groupCalls", label: "Group Calls", checked: true },
      { id: "mentors", label: "Mentors", checked: true },
      { id: "recentActivities", label: "Recent Activities", checked: true },
      { id: "application", label: "Application", checked: true },
      { id: "earnings", label: "Earnings", checked: false },
      { id: "forum", label: "Forum", checked: false },
      { id: "programAnalysis", label: "Program Analysis", checked: false },
    ])
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-purple-900 mb-2">Manage Widget</h2>
          <p className="text-sm text-gray-600 mb-6">
            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
          </p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="space-y-4"
          >
            {widgets.map((widget) => (
              <motion.div
                key={widget.id}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id={widget.id}
                  checked={widget.checked}
                  onCheckedChange={() => handleToggleWidget(widget.id)}
                  aria-label={`Toggle ${widget.label}`}
                />
                <Label htmlFor={widget.id} className="text-sm">
                  {widget.label}
                </Label>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handleResetToDefault}>
              Reset to Default
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
