import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { StyledAboutlink, StyledNav, StyledNavbarContainer } from './styles';

export function Navbar() {
  return (
    <StyledNavbarContainer data-testid="navbar">
      <StyledNav className="container py-[20px] max-sm:px-[20px]">
        <Link href="/">
          <Image
            src="/images/f1logo-pixelart.png"
            alt="F1 Logo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100px', height: '30px' }}
          />
        </Link>
        <Link href="/about">
          <StyledAboutlink>
            <Image
              src="/images/checkered-flag-icon.png"
              alt="flag"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '20px', height: '20px' }}
            />
            <span>About</span>
          </StyledAboutlink>
        </Link>
      </StyledNav>
    </StyledNavbarContainer>
  );
}
