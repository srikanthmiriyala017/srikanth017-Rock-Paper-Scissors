import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  HeadingContainer,
  MainContainer,
  RPSHeading,
  Count,
  Box,
  FlexContainer,
  ImageContainer,
  PopupContainer,
  TriggerButton,
  RulesImage,
  SubContainer,
  TriggerCloseButton,
} from './StyledComponent'
import RPSButtons from '../RPSButtons'
import RPSResultView from '../RPSResultView'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RPSGame extends Component {
  state = {
    display: true,
    userChoice: '',
    computerChoice: '',
    resultText: '',
    count: 0,
  }

  onDisplay = (id, imageUrl) => {
    const {count} = this.state
    const random = Math.floor(Math.random() * choicesList.length)
    const cmpChoice = choicesList[random]
    const lowerCaseInUser = id.toLowerCase()
    const lowerCaseInCmp = cmpChoice.id.toLowerCase()
    let text = ''
    let value = count
    if (lowerCaseInUser === lowerCaseInCmp) {
      text = 'IT IS DRAW'
      value += 0
      console.log(value)
    } else if (
      (lowerCaseInUser === 'rock' && lowerCaseInCmp === 'scissors') ||
      (lowerCaseInUser === 'paper' && lowerCaseInCmp) === 'rock' ||
      (lowerCaseInUser === 'scissors' && lowerCaseInCmp === 'paper')
    ) {
      text = 'YOU WON'
      value += 1
      console.log(value)
    } else {
      text = 'YOU LOSE'
      value -= 1
      console.log(value)
    }
    if (value > 0) {
      this.setState({
        display: false,
        userChoice: imageUrl,
        computerChoice: cmpChoice.imageUrl,
        resultText: text,
        count: value,
      })
    } else {
      this.setState({
        display: false,
        userChoice: imageUrl,
        computerChoice: cmpChoice.imageUrl,
        resultText: text,
        count: 0,
      })
    }
  }

  playAgain = () => {
    this.setState({display: true})
  }

  render() {
    const {display, userChoice, computerChoice, resultText, count} = this.state
    return (
      <MainContainer>
        <FlexContainer>
          <HeadingContainer>
            <RPSHeading>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </RPSHeading>
          </HeadingContainer>
          <Box>
            <Count>Score</Count>
            <Count>{count}</Count>
          </Box>
        </FlexContainer>
        {display ? (
          <ImageContainer>
            {choicesList.map(eacList => (
              <RPSButtons
                eacList={eacList}
                key={eacList.id}
                onDisplay={this.onDisplay}
              />
            ))}
          </ImageContainer>
        ) : (
          <RPSResultView
            resultText={resultText}
            userChoice={userChoice}
            computerChoice={computerChoice}
            playAgain={this.playAgain}
          />
        )}
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
          >
            {close => (
              <>
                <SubContainer>
                  <TriggerCloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </TriggerCloseButton>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </SubContainer>
              </>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}
export default RPSGame
