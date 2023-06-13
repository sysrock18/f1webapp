import React from 'react';
import { StyledGrid } from './styles';
import { api } from '@/services/api';
import { CircuitCard } from '@/components/CircuitCard';

export const CircuitsGrid = async () => {
  const circuits = await api.getCircuits();

  return (
    <StyledGrid>
      {circuits.map((circuit) => (
        <CircuitCard circuit={circuit} key={circuit.id} />
      ))}
    </StyledGrid>
  );
};
