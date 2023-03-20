import React from 'react'
import api from '../../api'

export async function getServerSideProps({ params: { id } }) {
  const circuit = await api.getCircuit(id)
  return {
    props: { circuit, id },
  }
}

function CircuitDescription({ circuit, id }) {
  return (
    <div>
      Circuit Description: {id}
      <h2>{circuit.name}</h2>
    </div>
  )
}

export default CircuitDescription