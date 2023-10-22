"use client"

import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  useEffect(() => router.push("/products"))

  return (
    <div className="mx-auto my-auto text-3xl flex flex-row">
      <h1>Redirecting....</h1>
      <Loader />
    </div>
    
  )
}
