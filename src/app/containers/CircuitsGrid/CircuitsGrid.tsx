import React from 'react';
import { StyledGrid } from './styles';
import { api } from '@/services/api';
import { CircuitCard } from '@/components/CircuitCard';

export const CircuitsGrid = async () => {
  const races = await api.getSeasonRaces();

  return (
    <StyledGrid data-testid="circuits-grid">
      {races.map((race) => (
        <CircuitCard race={race} key={`race-${race.round}`} />
      ))}
    </StyledGrid>
  );
};
