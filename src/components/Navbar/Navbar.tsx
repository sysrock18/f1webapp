'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledAboutlink, StyledNav, StyledNavbarContainer } from './styles';

export function Navbar() {
  return (
    <StyledNavbarContainer data-testid="navbar">
      <StyledNav className="container py-[20px] max-sm:px-[20px]">
        <Link href="/">
          <Image src="/images/f1logo-pixelart.png" alt="F1 Logo" width={100} height={30} />
        </Link>
        <Link href="/about">
          <StyledAboutlink>
            <Image src="/images/checkered-flag-icon.png" alt="flag" width={20} height={20} />
            <span>About</span>
          </StyledAboutlink>
        </Link>
      </StyledNav>
    </StyledNavbarContainer>
  );
}
