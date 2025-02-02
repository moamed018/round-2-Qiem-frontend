import LinkButton from "../Ui/LinkButton";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <LinkButton to="/login" className="text-5xl" fullRounded>Login</LinkButton>
      <LinkButton to="/register" className="text-5xl" fullRounded>Register</LinkButton>
    </div>
  );
}

export default HomePage;
