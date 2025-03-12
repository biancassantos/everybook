import ActionButton from "../../../components/ActionButton";
import { FaCheck } from "react-icons/fa"

function ReadButton() {
  return (
    <ActionButton isFilled={false}>
      <FaCheck /> Read
    </ActionButton>
  )
}

export default ReadButton;