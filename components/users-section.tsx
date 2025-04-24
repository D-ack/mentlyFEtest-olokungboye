"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

export default function UsersSection() {
  const data = [
    { name: "Students", value: 200, color: "#6366f1" },
    { name: "Programs", value: 23, color: "#22c55e" },
    { name: "Others", value: 17, color: "#f97316" },
  ]

  const total = data.reduce((sum, entry) => sum + entry.value, 0)

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between p-4">
          <h3 className="font-medium">Users</h3>
          <Select defaultValue="all">
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="students">Students</SelectItem>
              <SelectItem value="programs">Programs</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="flex justify-center">
            <div className="relative w-40 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    animationBegin={300}
                    animationDuration={1500}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">{total}</span>
                <span className="text-xs text-gray-500">Users</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-6">
            {data.map((item) => (
              <div key={item.name} className="text-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-lg font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
