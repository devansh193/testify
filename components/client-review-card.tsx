'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"
import Image from 'next/image'

interface Question {
  id: number
  text: string
  type: 'text' | 'rating'
}

export function ClientReviewCardComponent() {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({})
  const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({})

  // This would typically come from props or an API call
  const companyInfo = {
    name: "Acme Inc.",
    productName: "SuperWidget",
    logo: "/placeholder.svg?height=80&width=80",
    description: "The revolutionary product that changes everything!",
    questions: [
      { id: 1, text: "How would you rate our product?", type: 'rating' as const },
      { id: 2, text: "What do you like most about our product?", type: 'text' as const },
      { id: 3, text: "How likely are you to recommend our product to others?", type: 'rating' as const },
      { id: 4, text: "Any suggestions for improvement?", type: 'text' as const },
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
    // Here you would typically send this data to your backend
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Image src={companyInfo.logo} alt={`${companyInfo.name} logo`} width={80} height={80} />
          <div>
            <CardTitle className="text-2xl font-bold">{companyInfo.productName}</CardTitle>
            <CardDescription>{companyInfo.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {companyInfo.questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <Label>{question.text}</Label>
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
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>Submit Review</Button>
      </CardFooter>
    </Card>
  )
}