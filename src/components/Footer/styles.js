import styled from 'styled-components';

import { colors } from '../theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${colors.muted.m5};
    font-size: .9rem;
    transition: all .3s ease-in-out;
  }

  ul {
    margin: 0;

    li {
      display: inline-block;

      &:hover {
        p {
          color: ${colors.brand.dark};
        }
      }
    }
  }
`;
