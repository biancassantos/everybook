import { Link } from "react-router";
import GoogleButton from "../components/GoogleButton";

type AuthPageLayoutProps = {
  title: string,
  question: string,
  linkText: string,
  linkUrl: string,
  children: React.ReactNode
}

function AuthPageLayout({ title, question, linkText, linkUrl, children }: AuthPageLayoutProps) {
  return (
    <main className="flex justify-between h-screen bg-secondary">
      <section className="bg-[url('/imgs/bg-desktop.jpg')] bg-bottom bg-cover h-full w-[60%] py-12 px-10">
        <h1 className="font-playfair text-8xl text-primary mb-1">
          EveryBook
        </h1>
        <p className="text-primary text-xl">
          Join us and create your own virtual bookshelf!
        </p>
      </section>

      <section className="bg-white w-[40%] py-12 px-8 rounded-l-2xl flex flex-col items-center gap-9">
        <h2 className="text-3xl">
          {title}
        </h2>
        <GoogleButton />
        <span className="text-sm">Or</span>

        {children}

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