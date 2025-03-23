import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Spinner from "../../components/Spinner";

function ForgotPassword() {
  const currentUser = useContext(UserContext);

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />;

  return (
    <AuthPageLayout
    title="Reset password"
    isFullLayout={false}
    >
      <ForgotPasswordForm  />
    </AuthPageLayout>
  )
}

export default ForgotPassword;