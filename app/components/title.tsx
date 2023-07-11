'use client'
import { useEffect } from "react"

interface User {
    first_name: string
}

export default function Title({ first_name }: User) {
  
  useEffect(() => {
    console.log(first_name)
  }, [first_name])

  return (
    <main>
      {first_name}
    </main>
  )
}
