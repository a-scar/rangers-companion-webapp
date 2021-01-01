import Layout from "../components/layout";

export default function SignUp({ errorMessage, onSubmit }) {
  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          className="w-full bg-gray-200 shadow-inner rounded"
          id="email"
          type="email"
          aria-label="email address"
        />
        <button
          className="bg-black border-2 transition duration-300 border-opacity-25 border-black hover:bg-white hover:text-black font-bold text-white mt-3 py-1.5 px-3 rounded-lg"
          type="submit"
        >
          Sign Up / Login
        </button>

        {/*<button*/}
        {/*  className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"*/}
        {/*  type="submit"*/}
        {/*  onClick={subscribe}*/}
        {/*>*/}
        {/*  Sign Up*/}
        {/*</button>*/}

        {/*<Image src="/signup.svg" alt="Signup" width="64" height="64" />*/}
      </form>
    </Layout>
  );
}
