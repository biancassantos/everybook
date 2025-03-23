import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import LoginForm from "./components/LoginForm";
import Spinner from "../../components/Spinner";

function Login() {
  const currentUser = useContext(UserContext);

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />;

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