'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const session = useSession()
  console.log(session)
  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
      })

      if (!res.ok) {
        setErr(true)
      }
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }
    getData()
  }, [])
  console.log(data)
  return <div>Dashboard</div>
}

export default Dashboard
