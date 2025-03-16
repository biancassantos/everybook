import ActionButton from "../../../components/ActionButton";

function SettingsForm() {
  const labelClass = "text-sm mb-1";
  const inputClass = "border border-[#A4A4A4] rounded-md py-1 px-2 w-full";

  return (
    <form className="flex flex-col gap-4 w-full max-w-[300px]">
      <section className="flex flex-col">
        <label
        htmlFor="firstName"
        className={labelClass}
        >
          First Name
        </label>
        <input
        type="text"
        name="firstName"
        id="firstName"
        className={inputClass}
        />
      </section>
      <section className="flex flex-col">
        <label
        htmlFor="email"
        className={labelClass}
        >
          E-mail
        </label>
        <input
        type="text"
        name="email"
        id="email"
        className={inputClass}
        />
      </section>
      <section className="flex flex-col">
        <label
        htmlFor="password"
        className={labelClass}
        >
          New password
        </label>
        <input
        type="password"
        name="password"
        id="password"
        className={inputClass}
        />
      </section>
      <section className="flex gap-5 flex-wrap mt-8">
        <ActionButton
        isFilled={true}
        >
          Save changes
        </ActionButton>
        <ActionButton
        isFilled={false}
        >
          Cancel
        </ActionButton>
      </section>
    </form>
  )
}

export default SettingsForm;