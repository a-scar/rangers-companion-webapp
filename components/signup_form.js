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
      </form>
    </Layout>
  );
}
