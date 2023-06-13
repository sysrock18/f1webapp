'use client';

import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
  min-height: 2.85714286em;
  background: #fff;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  margin: auto;
  width: 100%;
`;

export const StyledAboutlink = styled.div`
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;
