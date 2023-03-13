/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Image = styled.img`
  width: 130px;
  height: 130px;
  @media screen and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 30px;
`
