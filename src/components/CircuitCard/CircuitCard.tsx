import { Circuit } from '@/services/adapters/CircuitAdapter/types';
import React from 'react';
import { StyledArticle } from './styles';

export const CircuitCard = ({ circuit }: { circuit: Circuit }) => {
  return (
    <StyledArticle>
      <h1>{circuit.name}</h1>
    </StyledArticle>
  );
};
