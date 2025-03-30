import useUserContext from "../../hooks/useUserContext";
import { Navigate } from "react-router";
import AuthPageLayout from "../../layouts/auth-page/AuthPageLayout";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Spinner from "../../components/Spinner";

function ForgotPassword() {
  const currentUser = useUserContext();

  if (currentUser?.isAuthPending) return <Spinner />;

  if (currentUser?.user) return <Navigate to="/" />; /* Not accessible to logged user */

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