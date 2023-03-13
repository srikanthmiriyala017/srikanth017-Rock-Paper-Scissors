/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ResultImageContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: 15px;
`
export const ResultHeading = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 25px;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
`
export const FlexYou = styled.div`
  margin-right: 80px;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-right: 40px;
  }
`
export const FlexOpp = styled.div`
  margin-left: 80px;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin-left: 40px;
  }
`
export const TextContainer = styled.div`
  text-align: center;
  margin-left: 30px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`
export const TextHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 500;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: 'Bree Serif';
`
