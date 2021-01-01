import { useState } from "react";
import { useRouter } from "next/router";
import { usePlayer } from "../lib/hooks";
import Layout from "../components/layout";
import { useEffect } from "react";
import { Magic } from "magic-sdk";
import SignUp from "../components/signup_form";

const Login = () => {
  // usePlayer({ redirectTo: "/player", redirectIfFound: true });
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg("");

    const body = {
      email: e.currentTarget.email.value,
    };

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      });
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.ok) router.push("/player");
      });
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setErrorMsg(error.message);
    }
  }

  useEffect(() => {
    // Prefetch the player page
    router.prefetch("/player");
  }, []);

  return (
    <Layout>
      <SignUp errorMessage={errorMsg} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default Login;
