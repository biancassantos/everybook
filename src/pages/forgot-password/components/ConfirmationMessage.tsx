import { Link } from "react-router";
import { FaCheckCircle } from "react-icons/fa";

function ConfirmationMessage({ email }: {email: string}) {
  return (
    <section className="flex flex-col items-center gap-4 w-full max-w-[350px] text-center">
      <FaCheckCircle className="text-6xl text-primary mb-4" />
      <p>An email has been sent to <strong>{email}</strong> with the password reset link. Please check your inbox.</p>
      <p>
        <Link 
        to="/login"
        className="text-primarydark hover:text-primary duration-300"
        >
          Go back to login page
        </Link>
      </p>
    </section>
  )
}

export default ConfirmationMessage;