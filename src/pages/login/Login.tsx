import AuthPageLayout from "../../layouts/AuthPageLayout";
import LoginForm from "./components/LoginForm";

function Login() {
  return (
    <AuthPageLayout
    title="Login"
    question="Need an account? "
    linkText="Register now"
    linkUrl="/register"
    >
      <LoginForm />
    </AuthPageLayout>
  )
}

export default Login;