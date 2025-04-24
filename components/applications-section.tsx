"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export default function ApplicationsSection() {
  const applications = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
    },
    {
      id: 2,
      name: "Adeoti Samuel",
      email: "adeotisamuel@gmail.com",
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
    },
    {
      id: 4,
      name: "Adeoti Samuel",
      email: "adeotisamuel@gmail.com",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Applications</h3>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
        {applications.map((application) => (
          <motion.div key={application.id} variants={item}>
            <Card className="border rounded-lg">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium text-sm">{application.name}</div>
                    <div className="text-xs text-gray-500">{application.email}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs h-7 px-3">
                    Reject
                  </Button>
                  <Button size="sm" className="text-xs h-7 px-3 bg-purple-600 hover:bg-purple-700">
                    Accept
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
