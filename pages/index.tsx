import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import _ from 'lodash'
import api from '../api'
import Link from 'next/link'

function Home() {
  const [circuits, setCircuits] = useState([])

  useEffect(() => {
    api.getCircuits()
      .then(resCircuits => {
        setCircuits(resCircuits)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Formula 1 Circuits</h1>
      {circuits.map(circuit => (
        <div key={circuit.id}>
          <h2>
            <Link href={`circuit/${circuit.id}`}>{circuit.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Home
