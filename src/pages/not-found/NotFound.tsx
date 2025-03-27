import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 h-screen text-primarydark">
      <h1 className="text-primary text-5xl font-semibold">
        404
      </h1>
      <p className="text-xl">
        Oops, seems like this page doesn't exist!
      </p>
      <p>
        <Link 
        to="/"
        className="duration-300 p-4 text-lg hover:text-primary"
        >
          Back to homepage
        </Link>
      </p>
    </section>
  )
}

export default NotFound;