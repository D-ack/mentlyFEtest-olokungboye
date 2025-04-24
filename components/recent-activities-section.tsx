"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MoreHorizontal, User, CreditCard } from "lucide-react"
import { motion } from "framer-motion"

export default function RecentActivitiesSection() {
  const activities = [
    {
      id: 1,
      title: "KYC Verification",
      description: "All new users must upload ID on Mently",
      time: "20 minutes ago",
      icon: <User className="w-4 h-4 text-white" />,
      iconBg: "bg-yellow-500",
    },
    {
      id: 2,
      title: "New User Sign Up!",
      description: "New user with email signed up on Mently",
      time: "25 minutes ago",
      icon: <User className="w-4 h-4 text-white" />,
      iconBg: "bg-purple-500",
    },
    {
      id: 3,
      title: "Withdrawal Request",
      description: "A withdrawal request is available to check",
      time: "40 minutes ago",
      icon: <CreditCard className="w-4 h-4 text-white" />,
      iconBg: "bg-blue-500",
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
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Recent Activities</h3>
        <div className="flex items-center gap-2">
          <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
            See all
          </Button>
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
        {activities.map((activity) => (
          <motion.div key={activity.id} variants={item}>
            <Card className="border rounded-lg">
              <CardContent className="p-3 flex items-start gap-3">
                <div className={`${activity.iconBg} p-2 rounded-full flex-shrink-0`}>{activity.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{activity.title}</div>
                  <div className="text-xs text-gray-500">{activity.description}</div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
