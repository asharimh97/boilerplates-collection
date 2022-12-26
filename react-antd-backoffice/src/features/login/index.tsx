import { ErrorBox } from "components/Auth";
import CardLogin from "components/Auth/CardLogin";
import { Button, Text } from "components/Base";
import { Input, Password } from "components/Form";
import useInput from "hooks/useInput";
import authStore from "lib/stores/entities/auth";
import { Link } from "react-router-dom";

function Login() {
  // zustand function
  const error = authStore((state) => state.error);
  const login = authStore((state) => state.login);

  // local state
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    if (!email || !password) {
      return;
    }

    // login the user
    await login(email, password);
  };

  return (
    <CardLogin title="Masuk">
      {error && <ErrorBox error="username atau password salah" />}
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={setEmail}
          type="email"
          label="Email"
          placeholder="Ketikan email"
        />
        <Password
          value={password}
          onChange={setPassword}
          label="Kata Sandi"
          placeholder="Ketikan kata sandi"
        />
        <Button type="primary" htmlType="submit" block css={{ mb: "12px" }}>
          Masuk
        </Button>
      </form>
      <Link to="/forgot-password">
        <Text color="$primary" size="$sm" weight="$medium" align="left">
          Lupa kata sandi?
        </Text>
      </Link>
    </CardLogin>
  );
}

export default Login;
