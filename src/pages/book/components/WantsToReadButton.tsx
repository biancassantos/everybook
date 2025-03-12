import ActionButton from "../../../components/ActionButton";
import { FaBookmark } from "react-icons/fa"

function WantsToReadButton() {
  return (
    <ActionButton isFilled={false}>
      <FaBookmark /> Wants to read
    </ActionButton>
  )
}

export default WantsToReadButton;