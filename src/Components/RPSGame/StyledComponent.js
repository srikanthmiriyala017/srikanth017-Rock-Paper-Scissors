/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const RPSHeading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 20px;
  font-weight: 500;
  margin: 15px 0px;
`
export const Count = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
`
export const HeadingContainer = styled.div`
  margin-left: 20px;
`
export const Box = styled.div`
  background-color: #ffffff;
  width: 100px;
  height: 120px;
  text-align: center;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    width: 100px;
  }
`
export const FlexContainer = styled.div`
  width: 500px;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  align-self: center;
  margin: 20px 0px;
  @media screen and (max-width: 767px) {
    width: 300px;
  }
`
export const ImageContainer = styled.ul`
  width: 500px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    margin-right: 60px;
  }
`
export const PopupContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  margin-bottom: 20px;
`
export const TriggerButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-weight: 500;
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: 'Bree Serif';
  cursor: pointer;
`
export const RulesImage = styled.img`
  width: 330px;
  height: 330px;
  align-self: center;
`
export const SubContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`
export const TriggerCloseButton = styled.button`
  background-color: #bfbfbf;
  border: none;
  align-self: flex-end;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  opacity: 0.5;
`
