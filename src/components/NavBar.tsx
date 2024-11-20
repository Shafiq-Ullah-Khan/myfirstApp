import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react";
const NavBar = ({logo}) => {
  return (
    <div>
    <Navbar fluid rounded className="py-6 lg:py-8 bg-orange-100 xs:py-4 lg:px-10">
      <Navbar.Brand   href="https://flowbite-react.com" className="pl-3">
        <img src={logo} className="mr-3 h-6 lg:h-5 xs:h-4" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#" className="font-bold text-xl hover:bg-orange-400">
        How it works
        </Navbar.Link>
        <Navbar.Link  href="#" className="font-bold text-xl hover:bg-orange-400">
        Meals
        </Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-xl hover:bg-orange-400">Testimonials</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-xl hover:bg-orange-400">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="font-bold text-xl hover:bg-orange-400">Pricing</Navbar.Link>
        <Button className="bg-orange-500 text-white text-xl lg:px-3 font-bold hover:bg-orange-400">Try for free</Button>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavBar
