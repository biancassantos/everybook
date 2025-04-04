import useUserContext from "../../hooks/useUserContext";
import { Navigate } from "react-router";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import LoginForm from "./components/LoginForm";
import Spinner from "../../components/Spinner";

function Login() {
  const currentUser = useUserContext();

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />; /* Not accessible to logged user */

  return (
    <AuthPageLayout
    title="Login"
    question="Need an account? "
    linkText="Register now"
    linkUrl="/register"
    isFullLayout={true}
    >
      <LoginForm />
    </AuthPageLayout>
  )
}

export default Login;