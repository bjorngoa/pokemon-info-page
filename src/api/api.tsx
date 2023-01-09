import { useEffect, useState } from "react"

const UseFetchedData = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])
    
    return {data, isLoading}
}

export default UseFetchedData