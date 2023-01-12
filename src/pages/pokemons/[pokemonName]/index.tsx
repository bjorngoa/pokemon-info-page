import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import UseFetchedData from '../../../api/api'

const Index = () => {
  const { data } = UseFetchedData()
  const { pokemonName = ""} = useRouter().query as {
    pokemonName: string;
  }
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(false)
  const [pokemonImage, setPokemonImage] = useState<string>()
   useEffect(() => {
    setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
                setPokemon(data)
                setPokemonImage(data.sprites?.front_default)
            })
            setLoading(false)
            
    }, [pokemonName])

    console.log(pokemon)
  const src = pokemonImage
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className='text-white text-5xl'>{pokemonName}</h1>
        {loading ? <p>loading...</p> : 
        
            <Image loader={() => src} src={src} width={200} height={100} alt={pokemonName}/>
        }
    </div>
  )
}

export default Index