import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import RegisterForm from "./components/RegisterForm";
import Spinner from "../../components/Spinner";

function Register() {
  const currentUser = useContext(UserContext);

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />;

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