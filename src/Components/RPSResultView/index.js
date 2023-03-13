import {
  ResultImageContainer,
  ResultHeading,
  Image,
  FlexYou,
  FlexOpp,
  TextContainer,
  TextHeading,
  PlayAgainButton,
} from './StyledComponent'

const RPSResultView = props => {
  const {resultText, userChoice, computerChoice, playAgain} = props
  const onPlayAgain = () => {
    playAgain()
  }
  return (
    <>
      <ResultImageContainer>
        <FlexYou>
          <ResultHeading>YOU</ResultHeading>
          <Image src={userChoice} alt="your choice" />
        </FlexYou>
        <FlexOpp>
          <ResultHeading>OPPONENT</ResultHeading>
          <Image src={computerChoice} alt="opponent choice" />
        </FlexOpp>
      </ResultImageContainer>
      <TextContainer>
        <TextHeading>{resultText}</TextHeading>
        <PlayAgainButton type="button" onClick={onPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </TextContainer>
    </>
  )
}

export default RPSResultView
