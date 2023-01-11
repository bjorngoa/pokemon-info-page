import { setDefaultResultOrder } from 'dns'
import React, { useEffect, useState } from 'react'
import { resourceLimits } from 'worker_threads'
import UseFetchedData from '../api/api'

export const Card = () => {
  const { data, pokemonName } = UseFetchedData()
  console.log("tihi", pokemonName)
  
  
  return (
    <div className='grid grid-cols-3'>

      {data?.results.map((pokemon, idx) => {
        const newIdx = idx + 1
        return (
          <>
          <div className='text-white text-center'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newIdx}.png`} />
            {pokemon.name}
          </div>
          </>
        )
      })}
    </div>
  )
}
``