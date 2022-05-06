// import "../styles/hero.scss"
import * as React from "react"
import Image from "next/image"
import Avatar from "../images/avatar.svg"
// import Particles from "react-tsparticles"
const PARTICLE_CONFIG = {
  background: {
    color: {
      value: "#ffffff",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#cecece",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}
export function Hero() {
  return (
    <div className="flex container mx-auto h-screen justify-center items-center font-poppins">
      {/*<Particles*/}
      {/*  className="hero__particles absolute w-full h-full top-0 left-0 -z-10"*/}
      {/*  options={PARTICLE_CONFIG}*/}
      {/*></Particles>*/}
      <div className={'flex h-2/3 items-center justify-center gap-20 w-full'}>
        <div className={'relative w-1/3 h-full flex items-center  '}>
          <Image src={Avatar} alt={"My Avatar"} layout={"fill"}/>
        </div>
        <div className="hero">
          <p className="text-xl uppercase mb-4">Hi there 👋 I am</p>
          <h1 className="text-7xl mb-8">Tahsin <br/> Al Sayeed</h1>
          <p className="text-2xl text-gray-700 uppercase">Software Engineer</p>
        </div>

      </div>
    </div>
  )
}
