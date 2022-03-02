import styled from "styled-components";
import Link from 'next/link'

export const ContentLinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0c0c0c;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.5rem solid beige;
`;

export const Title = styled.div`
  font-family: 'Festive', cursive;
  margin-top: 1rem;
`;

export const EmptyImg = styled.div`
  min-height: 300px;
`;

