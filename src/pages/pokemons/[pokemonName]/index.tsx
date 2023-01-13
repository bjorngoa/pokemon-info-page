import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import UseFetchedData from '../../../api/api'

const Index = () => {
  const { data } = UseFetchedData()
  const { pokemonName = ""} = useRouter().query as {
    pokemonName: string;
  }
  const [pokemon, setPokemon] = useState([])
  const [pokemonAbilities, setPokemonAbilities] = useState<any[]>()
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
                setPokemonAbilities(data?.abilities.map(abi => abi.ability.name)) 
                setPokemonImage(data.sprites?.front_default)
                setPokemonImageBack(data.sprites?.back_default)
                
            })
             .catch((error) => {
                console.log(error)
            })
            setLoading(false)
            
    }, [pokemonName])
  /* const abilityNames = pokemonAbilities?.map(p => p.ability.name)*/
  console.log(pokemonAbilities?.map(a => a)) 
 /*  const abilityOne = abilityNames?.shift()
  const abilityTwo = abilityNames?.pop() */
  const src = pokemonImage
  const srcBack = pokemonImageBack
  
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className=' w-full md:block md:w-auto'>
        <nav className='bg-gray-900 flex flex-end border-gray-200 px-2 sm:px-4 py-2. text-white'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white' href={"/"}>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex  flex-col items-center justify-center ">
          <h1 className='text-white text-5xl mt-20'>{pokemonName}</h1>
          {loading ? <p className='text-white'>loading...</p> : 
              <div>
                <div className='flex justify-center items-center'>
                  {/* <Image className='cursor-pointer brightness-0 hover:brightness-50' loader={() => src} src={src} width={150} height={50} alt={pokemonName}/> */}
                  <Image className='cursor-pointer hover:drop-shadow-[0_35px_35px_#b0a5a5] hover:scale-110' onClick={() => setPokemonStanceFront(!pokemonStanceFront)} loader={() => pokemonStanceFront ? src : srcBack} src={src} width={400} height={200} alt={pokemonName}/>
                  {/* <Image className='cursor-pointer brightness-0 hover:brightness-50' loader={() => src} src={src} width={150} height={50} alt={pokemonName}/> */}
                </div>
                  <p className='text-white'>height: {pokemon.height}</p>
                  <p className='text-white'>Weight: {pokemon.weight}</p>
                  <div className='text-white flex gap-1'>Abilities:{pokemonAbilities?.map((ability, idx) => <p key={idx}>{ability},</p>)}</div>
                  
                  {/* <p className='text-white'>abilities: {abilityOne}, {abilityTwo}</p>   */}          
                  {/* <p className='text-white'>ability: {pokemonAbilities.map(ability => ability[0])}</p> */}
              </div>
          }
      </div>
    </div>
  )
}

export default Index