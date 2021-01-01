import Link from "next/link";

export default function ButtonBar(props) {
  // const renderLogoutButton = () => {
  //   console.log(props.isLoggedIn);
  //   if (props.isLoggedIn) {
  //     return (
  //       <Link href="api/logout">
  //         <button className="ml-3">Logout</button>
  //       </Link>
  //     );
  //   }
  // };

  return (
    <div>
      {/*<div>*/}
      {/*  <Image src="/signup.svg" alt="Signup" width="64" height="64" />*/}
      {/*</div>*/}

      <div className="flex mr-10 mt-8 lg:mr-60 sm:mr-20 md:mr-32 text-sm justify-end">
        <Link href="/login">
          <button className="bg-black border-2 transition duration-300 border-opacity-25 border-black hover:bg-white hover:text-black font-bold text-white py-1.5 px-3 rounded-lg">
            Sign Up/Log In
          </button>
        </Link>
        <Link href="api/logout">
          <button className="ml-3">Logout</button>
        </Link>

        {/*{renderLogoutButton()}*/}
      </div>
    </div>
  );
}
