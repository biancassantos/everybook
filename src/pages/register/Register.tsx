import useUserContext from "../../hooks/useUserContext";
import { Navigate } from "react-router";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import RegisterForm from "./components/RegisterForm";
import Spinner from "../../components/Spinner";

function Register() {
  const currentUser = useUserContext();

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />;

  return (
    <AuthPageLayout
    title="Register"
    question="Already has an account? "
    linkText="Sign in"
    linkUrl="/login"
    isFullLayout={true}
    >
      <RegisterForm />
    </AuthPageLayout>
  )
}

export default Register;