import ActionButton from "../../../components/ActionButton";
import { GrInProgress } from "react-icons/gr";

function ReadingButton() {
  return (
    <ActionButton isFilled={false}>
      <GrInProgress /> Reading
    </ActionButton>
  )
}

export default ReadingButton;