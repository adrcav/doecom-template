import styled from 'styled-components';

import { colors, lengths } from '../theme';

export const Container = styled.div`
  width: 100%;
  height: ${lengths.header.default};
  background-color: ${colors.base.light};
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
`;

export const Logo = styled.img`
  height: 50px;

  @media (max-width: 991px) {
    height: 40px;
  }
`;

export const Account = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-size: .8rem;
    line-height: 1.1rem;
    text-align: right;
    margin: auto 7px auto auto;
    color: ${colors.muted.m5};

    strong {
      cursor: pointer;
      transition: all .3s ease-in-out;
      font-weight: 800;

      &:hover {
        color: ${colors.action.primary.default};
      }
    }
  }

  img {
    width: 50px;
    height: 50px;
    border: 2px solid #E7E8E9;
    border-radius: 50%;
  }

  .button-menu-expand {
    display: none;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: ${colors.brand.dark};
    margin-left: 7px;

    @media (max-width: 991px) {
      display: flex;
    }
  }
`;
