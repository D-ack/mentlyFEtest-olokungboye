"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, Clock, MoreHorizontal, Users } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      description:
        "Learn the basics of UI/UX design and understand why it matters in product development and software design.",
      instructor: "Guided by: John Doe",
      participants: 10,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Design Hack Practical Design Call",
      description:
        "This program is a hands-on guide designed for designers who want to master user interface and experience design with 1:1 feedback.",
      instructor: "Guided by: Jane Smith",
      participants: 8,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Colour Hack Practical Design Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and application in UI design.",
      instructor: "Guided by: Carl Johnson",
      participants: 12,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const groupCalls = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      status: "Today",
      time: "10:00 - 11:00 AM",
      date: "Wed, Jul 20, 2023",
      participants: 10,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Weekly Meeting - Product Demo Review with Testers",
      status: "Upcoming",
      time: "10:00 - 11:00 AM",
      date: "Wed, Jul 20, 2023",
      participants: 8,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Weekly Meeting - Product Demo Review with Testers",
      status: "Today",
      time: "10:00 - 11:00 AM",
      date: "Wed, Jul 20, 2023",
      participants: 12,
      image: "/placeholder.svg?height=60&width=60",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Programs</h3>
            <span className="text-xs text-gray-500">Active: 3</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
              See all
            </Button>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={item}>
              <Card className="border rounded-lg overflow-hidden h-full">
                <CardHeader className="p-3 pb-0 flex justify-between items-start bg-gray-100">
                  <div></div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </CardHeader>
                <CardContent className="p-3">
                  <h4 className="text-sm font-medium line-clamp-2 mb-2">{program.title}</h4>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-3">{program.description}</p>
                  <div className="text-xs text-gray-500">{program.instructor}</div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{program.participants} participants</span>
                  </div>
                  <Button size="sm" className="text-xs h-7 px-2 bg-purple-600 hover:bg-purple-700">
                    Join Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="bg-white rounded-lg p-4 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">Group Calls</h3>
            <span className="text-xs text-gray-500">Active: 3</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="link" size="sm" className="text-purple-600 h-auto p-0">
              See all
            </Button>
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {groupCalls.map((call) => (
            <motion.div key={call.id} variants={item}>
              <Card className="border rounded-lg overflow-hidden">
                <CardHeader className="p-3 pb-0 flex justify-between items-start">
                  <div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        call.status === "Today" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {call.status}
                    </span>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </CardHeader>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <Image
                      src={call.image || "/placeholder.svg"}
                      alt="Program"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div>
                      <h4 className="text-sm font-medium line-clamp-2">{call.title}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500">{call.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500">{call.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{call.participants} participants</span>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="text-xs h-7 px-2">
                      View Participants
                    </Button>
                    <Button size="sm" className="text-xs h-7 px-2 bg-purple-600 hover:bg-purple-700">
                      Join Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}
