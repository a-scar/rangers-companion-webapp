import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { useEffect } from "react";
import { Magic } from "magic-sdk";
import SignUp from "../components/signup_form";
import NavBar from "../components/nav_bar";
import Image from "next/image";

const Login = () => {
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
    <Fragment>
      <NavBar></NavBar>

      <div className="text-center mt-4">
        <Image src="/unlock.svg" alt="Login" width="200" height="200" />
      </div>

      <Layout>
        <SignUp errorMessage={errorMsg} onSubmit={handleSubmit} />
      </Layout>
    </Fragment>
  );
};

export default Login;
