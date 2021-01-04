import Link from "next/link";
import Image from "next/Image";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar(props) {
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
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Rangers of Shadow Deep Companion App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/player">Player Page</Nav.Link>
        </Nav>
        <Link href="/login">
          <button className="bg-black border-2 text-sm transition duration-300 border-opacity-25 border-black font-bold text-white py-1.5 px-3 rounded-lg">
            Sign Up/Log In
          </button>
        </Link>
        <Link href="api/logout">
          <button className="text-sm ml-3">Logout</button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );

  // return (
  //   <div>
  //     <div>
  //       <Image src="/dice.svg" alt="Signup" width="64" height="64" />
  //     </div>
  //
  //     <div className="flex mr-10 mt-8 lg:mr-60 sm:mr-20 md:mr-32 text-sm justify-end">
  //       <Link href="/login">
  //         <button className="bg-black border-2 transition duration-300 border-opacity-25 border-black hover:bg-white hover:text-black font-bold text-white py-1.5 px-3 rounded-lg">
  //           Sign Up/Log In
  //         </button>
  //       </Link>
  //       <Link href="api/logout">
  //         <button className="ml-3">Logout</button>
  //       </Link>
  //
  //       {/*{renderLogoutButton()}*/}
  //     </div>
  //   </div>
  // );
}
