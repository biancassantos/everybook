import { useNavigate } from "react-router";
import DisplayNameForm from "./components/DisplayNameForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import DeleteUserArea from "./components/DeleteUserArea";
import SectionHeader from "./components/SectionHeader";
import ActionButton from "../../components/ActionButton";

function Settings() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-start gap-10 bg-latte rounded-lg py-10 px-5 text-primarydark max-w-[1500px] mx-auto xs:px-8">
      <h1 className="text-3xl text-primary font-semibold xs:text-4xl">
        Settings
      </h1>
      <section className="self-stretch mb-4">
        <SectionHeader>User</SectionHeader>
        <DisplayNameForm />
      </section>

      <section className="self-stretch mb-4">
        <SectionHeader>Password</SectionHeader>
        <ChangePasswordForm />
      </section>

      <section className="self-stretch mb-5">
        <SectionHeader>Account</SectionHeader>
        <DeleteUserArea />
      </section>
      
      <ActionButton
        onClick={() => navigate(-1)}
        isFilled={false}
      >
        Cancel
      </ActionButton>
    </section>
  )
}

export default Settings;