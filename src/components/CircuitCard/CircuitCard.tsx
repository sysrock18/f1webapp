import React from 'react';
import { ContentBox, DescriptionBox, StyledArticle, StyledLink } from './styles';
import Image from 'next/image';
import { SeasonRace } from '@/services/adapters/SeasonAdapter/types';

export const CircuitCard = ({ race }: { race: SeasonRace }) => {
  const { circuit, raceName, date, url } = race;

  return (
    <StyledArticle data-testid="circuit-card">
      <StyledLink href={url} target="_blank" prefetch={false}>
        <ContentBox>
          <Image alt="" width="0" height="0" sizes="100vw" className="mb-[8px] h-auto w-full" src={circuit.imageUrl} />
          <DescriptionBox>
            <h1 className="my-2">{raceName}</h1>
            <div className="text-sm">
              <b>Circuit </b>
              {circuit.name}
            </div>
            <div className="text-sm">
              <b>Date </b>
              {date.toDateString()}
            </div>
          </DescriptionBox>
        </ContentBox>
      </StyledLink>
    </StyledArticle>
  );
};
