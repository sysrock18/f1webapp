import { Circuit } from '@/services/adapters/CircuitAdapter/types';
import React from 'react';
import { ContentBox, DescriptionBox, StyledArticle, StyledLink } from './styles';
import Image from 'next/image';

export const CircuitCard = ({ circuit }: { circuit: Circuit }) => {
  return (
    <StyledArticle>
      <StyledLink href={circuit.url} target="_blank" prefetch={false}>
        <ContentBox>
          <Image alt="" width="0" height="0" sizes="100vw" className="mb-[8px] h-auto w-full" src={circuit.imageUrl} />
          <DescriptionBox>
            <h1>{circuit.name}</h1>
          </DescriptionBox>
        </ContentBox>
      </StyledLink>
    </StyledArticle>
  );
};
