import React, { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "86c5f0bd69mshecb9586279e4595p1b6142jsnbaa6922b3cc8",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  }
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.request(options)
      setData(response.data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setLoading(true)
    fetchData()
  }

  return { data, loading, error, refetch }
}

export default useFetch
