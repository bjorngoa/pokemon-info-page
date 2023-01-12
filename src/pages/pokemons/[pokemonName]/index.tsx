import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import UseFetchedData from '../../../api/api'

const Index = () => {
  const { data } = UseFetchedData()
  const { pokemonName = ""} = useRouter().query as {
    pokemonName: string;
  }
  const [pokemon, setPokemon] = useState([])
  const [pokemonAbilities, setPokemonAbilities] = useState([])
  const [loading, setLoading] = useState(false)
  const [pokemonImage, setPokemonImage] = useState<string>()
  const [pokemonImageBack, setPokemonImageBack] = useState<string>()
  const [pokemonStanceFront, setPokemonStanceFront] = useState(true)

  
   useEffect(() => {
    setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
                setPokemonAbilities(data?.abilities)
                setPokemonImage(data.sprites?.front_default)
                setPokemonImageBack(data.sprites?.back_default)
            })
            setLoading(false)
            
    }, [pokemonName])
   
    console.log(pokemon)
  const src = pokemonImage
  const srcBack = pokemonImageBack
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className='text-white text-5xl'>{pokemonName}</h1>
        {loading ? <p className='text-white'>loading...</p> : 
            <div>
                <Image className='cursor-pointer' onClick={() => setPokemonStanceFront(!pokemonStanceFront)} loader={() => pokemonStanceFront ? src : srcBack} src={src} width={200} height={100} alt={pokemonName}/>
                <p className='text-white'>height: {pokemon.height}</p>
                <p className='text-white'>Weight: {pokemon.weight}</p>
            </div>
        }
        <div>
        </div>
    </div>
  )
}

export default Index