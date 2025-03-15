import SettingsForm from "./components/SettingsForm";

function Settings() {

  return (
    <section className="flex flex-col items-start gap-10 bg-latte rounded-lg py-10 px-8 text-primarydark">
      <h1 className="text-4xl text-primary font-semibold">
        Settings
      </h1>
      <SettingsForm />
    </section>
  )
}

export default Settings;