import { useEffect, useState } from "react"

const UseFetchedData = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonImg, setPokemonImg] = useState()
    useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setPokemonName(data.results.map(pokemon => pokemon.name))
                setLoading(false)
                
            })
    }, [])
   
    console.log(pokemonName)
   
   /*  useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, []) */

    
    return {data, isLoading, pokemonName}
}

export default UseFetchedData