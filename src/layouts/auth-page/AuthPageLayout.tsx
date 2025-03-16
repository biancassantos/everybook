import { Link } from "react-router";
import Welcome from "./components/Welcome";
import GoogleButton from "./components/GoogleButton";

type AuthPageLayoutProps = {
  title: string,
  question: string,
  linkText: string,
  linkUrl: string,
  children: React.ReactNode
}

function AuthPageLayout({ title, question, linkText, linkUrl, children }: AuthPageLayoutProps) {
  return (
    <main className="flex flex-col justify-between min-h-screen h-full bg-secondary md:flex-row">
      <Welcome />

      <section className="bg-white w-full pt-16 pb-12 px-5 rounded-l-2xl flex flex-col items-center gap-9 xs:px-8 md:w-[40%]">
        <h2 className="text-3xl">
          {title}
        </h2>

        <GoogleButton />

        <span className="text-sm">Or</span>

        {children} {/* Where the form is rendered */}

        <p className="text-sm">
          {question} 
          <Link 
          to={linkUrl} 
          className="font-semibold hover:text-primarydark duration-300"
          >
            {linkText}
          </Link>
        </p>
      </section>
    </main>
  )
}

export default AuthPageLayout;