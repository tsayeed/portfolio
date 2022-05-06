// import { Link } from "next"
import * as React from "react"
import Image from "next/image"
import Logo from "../images/Logo-Short.png"

const Header = () => {
  const hash = typeof window !== "undefined" ? window.location.hash : null
  const activeIfHash = _hash =>
    hash === "#about" ? "text-gray-800" : "text-gray-400"
  return (
    <header>
      <nav className="absolute bg-white text-base border-b border-slate-300 w-screen h-16 py-4">
        <div className="container mx-auto flex justify-between">
          <div className={"relative h-10 w-16"}>
            <Image src={Logo} layout={"fill"}></Image>
          </div>
          <div>
            <a
              href="#about"
              className={"hover:text-gray-800 " + activeIfHash("#about")}
            >
              About
            </a>
            <a
              href="#experience"
              className={
                "hover:text-gray-800 ml-2 " + activeIfHash("#experience")
              }
            >
              Experience
            </a>
            <a
              href="#works"
              className={"hover:text-gray-800 ml-2 " + activeIfHash("#works")}
            >
              Works
            </a>
            <a
              href="#writings"
              className={
                "hover:text-gray-800 ml-2 " + activeIfHash("#writings")
              }
            >
              Writings
            </a>
            <a
              href="#contact"
              className={"hover:text-gray-800 ml-2 " + activeIfHash("#contact")}
            >
              Contact
            </a>
            <button
              className={
                "ml-4 border-solid border border-blue-600 text-blue-600 px-8 py-2 rounded hover:bg-blue-600 hover:text-white"
              }
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
    </header>
    // <Navbar expand="lg" fixed="top" bg='white'>
    //   <Container>
    //     <Navbar.Brand href="/">Tahsin</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#about">About</Nav.Link>
    //         <Nav.Link href="#experience">Experience</Nav.Link>
    //         <Nav.Link href="#works">Works</Nav.Link>
    //         <Nav.Link href="#writings">Writings</Nav.Link>
    //         <Nav.Link href="#contact">Contact</Nav.Link>
    //         <Button className='ms-2' variant='outline-primary'>Resume</Button>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Header
