'use client';

import Link from 'next/link';
import { styled } from 'styled-components';

export const StyledArticle = styled.article`
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  display: block;
`;

export const ContentBox = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DescriptionBox = styled.div`
  margin-top: auto;
`;
