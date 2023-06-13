import { Circuit } from '@/services/adapters/CircuitAdapter/types';
import React from 'react';
import { StyledArticle } from './styles';
import Link from 'next/link';

export const CircuitCard = ({ circuit }: { circuit: Circuit }) => {
  return (
    <StyledArticle>
      <Link href={`circuit/${circuit.id}`}>
        <h1>{circuit.name}</h1>
      </Link>
    </StyledArticle>
  );
};
