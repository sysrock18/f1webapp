import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../api'
import { Circuit } from '../../models/Circuit'
import Navbar from '../../components/Navbar'

function CircuitDescription() {
  const { query: { id } } = useRouter()
  const [circuit, setCircuit] = useState<Circuit>({} as Circuit)
  
  useEffect(() => {
    if (id != null) {
      api.getCircuit(id)
        .then(resCircuit => {
          setCircuit(resCircuit)
        })
    }
  }, [id])

  return (
    <div>
      <Navbar />
      Circuit Description: {id}
      <h2>{circuit.name}</h2>
    </div>
  )
}

export default CircuitDescription