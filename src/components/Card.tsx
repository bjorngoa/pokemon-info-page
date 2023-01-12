import { setDefaultResultOrder } from 'dns'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { resourceLimits } from 'worker_threads'
import UseFetchedData from '../api/api'

export const Card = () => {
  const { data, pokemonName } = UseFetchedData()
  
  
  
  return (
    <div className='grid grid-cols-4'>

      {data?.results.map((pokemon: any, idx: number) => {
        const newIdx = idx + 1
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newIdx}.png`
        return (
          <>
          <Link href={`/pokemons/${pokemon.name}`} className='text-white text-center hover:border-b-4 hover:border-t-4 hover:border-r hover:border-l hover:brightness-125 hover:font-semibold  border-gray-200 rounded'>
            <Image loader={() => src} src={src} width={200} height={100} alt={pokemon.name}/>
            {pokemon.name}
          </Link>
          </>
        )
      })}
    </div>
  )
}
``