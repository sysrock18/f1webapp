import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import api from '../api'
import Link from 'next/link'
import { Circuit } from 'models/Circuit'

export const getServerSideProps = async () => {
  const circuits = await api.getCircuits()
  return { props: { circuits } }
}

function Home({ circuits }: { circuits: Circuit[] }) {
  return (
    <div>
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
