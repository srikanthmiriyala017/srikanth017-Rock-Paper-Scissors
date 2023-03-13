import {Image, Button} from './StyledComponent'

const RPSButtons = props => {
  const {eacList, onDisplay} = props
  const {id, imageUrl} = eacList
  const onButton = () => {
    onDisplay(id, imageUrl)
  }
  return (
    <li>
      <Button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onButton}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}

export default RPSButtons
