import React from 'react';
import { StyledGrid } from './styles';
import { api } from '@/services/api';
import Link from 'next/link';
import { CircuitCard } from '@/components/CircuitCard';

export const CircuitsGrid = async () => {
  const circuits = await api.getCircuits();

  return (
    <StyledGrid>
      {circuits.map((circuit) => (
        <Link href={`circuit/${circuit.id}`} key={circuit.id}>
          <CircuitCard circuit={circuit} />
        </Link>
      ))}
    </StyledGrid>
  );
};
