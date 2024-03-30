import { useEffect, useState, useRef } from "react"

export function useSearch () {
    const [search, setSeacrh] = useState('')
    
    const handleChange = (event) => {
      const newSearch = event.target.value
      setSeacrh(newSearch)
  }
  
    return { search, handleChange}
  }