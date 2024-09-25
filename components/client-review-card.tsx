'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star, Lightbulb, ThumbsUp, Award } from "lucide-react"
import Image from 'next/image'
import { Progress } from "@/components/ui/progress"

export function ClientReviewCardComponent() {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({})
  const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const courseInfo = {
    name: "LearnHub",
    courseName: "Advanced Web Development Masterclass",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Master the latest web technologies and best practices!",
    questions: [
      { id: 1, text: "How would you rate the course content?", type: 'rating' as const, icon: <Lightbulb className="h-5 w-5" /> },
      { id: 2, text: "What did you find most valuable about this course?", type: 'text' as const },
      { id: 3, text: "How would you rate the instructor's teaching style?", type: 'rating' as const, icon: <ThumbsUp className="h-5 w-5" /> },
      { id: 4, text: "How likely are you to recommend this course to others?", type: 'rating' as const, icon: <Award className="h-5 w-5" /> },
      { id: 5, text: "Any suggestions for improving the course?", type: 'text' as const },
    ]
  }

  const handleRatingChange = (questionId: number, rating: number) => {
    setRatings(prev => ({ ...prev, [questionId]: rating }))
  }

  const handleTextChange = (questionId: number, text: string) => {
    setTextAnswers(prev => ({ ...prev, [questionId]: text }))
  }

  const handleSubmit = () => {
    const reviewData = {
      ratings,
      textAnswers
    }
    console.log("Submitting review:", reviewData)
    setSubmitted(true)
    // Here you would typically send this data to your backend
  }

  const calculateProgress = () => {
    const totalQuestions = courseInfo.questions.length
    const answeredQuestions = Object.keys(ratings).length + Object.keys(textAnswers).length
    return (answeredQuestions / totalQuestions) * 100
  }

  if (submitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <ThumbsUp className="h-16 w-16 mx-auto text-green-500" />
            <CardTitle className="text-2xl font-bold">Thank You for Your Review!</CardTitle>
            <CardDescription>Your feedback helps us improve our courses and helps other students make informed decisions.</CardDescription>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Image src={courseInfo.logo} alt={`${courseInfo.name} logo`} width={80} height={80} />
          <div>
            <CardTitle className="text-2xl font-bold">{courseInfo.courseName}</CardTitle>
            <CardDescription>{courseInfo.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courseInfo.questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label className="flex items-center space-x-2">
                {question.icon}
                <span>{question.text}</span>
              </Label>
              {question.type === 'rating' ? (
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= (ratings[question.id] || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                      onClick={() => handleRatingChange(question.id, star)}
                    />
                  ))}
                </div>
              ) : (
                <Textarea
                  value={textAnswers[question.id] || ''}
                  onChange={(e) => handleTextChange(question.id, e.target.value)}
                  placeholder="Your answer"
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <Progress value={calculateProgress()} className="w-full" />
        <Button className="w-full" onClick={handleSubmit}>Submit Review</Button>
      </CardFooter>
    </Card>
  )
}