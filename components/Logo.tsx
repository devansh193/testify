import { Quote } from "lucide-react"
import Link from "next/link"

export default function TestifyLogo() {
  return (
    <Link href={'/'}>
    <div className="flex items-center space-x-2">
      <Quote className="w-8 h-8 text-black" />
      <span className="text-2xl font-bold text-black">Testify</span>
    </div>
    </Link>
  )
}