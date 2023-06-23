import React from 'react';
import { ContentBox, DescriptionBox, StyledArticle, StyledLink } from './styles';
import Image from 'next/image';
import { SeasonRace } from '@/services/adapters/SeasonAdapter/types';

export const CircuitCard = ({ race }: { race: SeasonRace }) => {
  const { circuit, raceName, date, url, raceWinner } = race;

  return (
    <StyledArticle data-testid="circuit-card">
      <StyledLink href={url} target="_blank" prefetch={false}>
        <ContentBox>
          <Image alt="" width="0" height="0" sizes="100vw" className="mb-[8px] h-auto w-full" src={circuit.imageUrl} />
          <DescriptionBox>
            <h1 className="my-2 text-lg">{raceName}</h1>
            <div className="mb-2 text-sm">
              <b>Circuit </b>
              {circuit.name}
            </div>
            <div className="mb-2 text-sm">
              <b>Date </b>
              {date.toDateString()}
            </div>
            <div className="mb-2 text-sm">
              <b>Driver Winner </b>
              {raceWinner?.driver.name ?? 'TBD'}
            </div>
            <div className="mb-2 text-sm">
              <b>Constructor </b>
              {raceWinner?.constructor.name ?? 'TBD'}
            </div>
          </DescriptionBox>
        </ContentBox>
      </StyledLink>
    </StyledArticle>
  );
};
