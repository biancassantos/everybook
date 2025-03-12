import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import RegisterForm from "./components/RegisterForm";

function Register() {
  return (
    <AuthPageLayout
    title="Register"
    question="Already has an account? "
    linkText="Sign in"
    linkUrl="/login"
    >
      <RegisterForm />
    </AuthPageLayout>
  )
}

export default Register;