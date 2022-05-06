import { useIntersection } from "next/dist/client/use-intersection"
import * as React from "react"
import MyPic from "../images/my-picture.jpg"
import Image from "next/image"

export function AboutMe() {
  return (
    <div className={"container mx-auto flex justify-center gap-20"}>
      <article className={"w-1/3"}>
        <p>
          I am from Dhaka, Bangladesh. After completing my Bachelors in Computer
          Science and Engineering from University of Dhaka, I've been working as
          a fullstack developer for the past 3+ years. I've worked in multiple
          companies and developed applications for the web both for the
          Bangladesh and US market.
        </p>
        <p>
          My dream is to make the meaning of my name come true. My name comes
          from Arabic which means positive improvement. I wish to bring positive
          improvement for me, my society, my country, and the whole world. I've
          taken technology and more specifically IT as my method. I love to
          develop software that brings value to people.{" "}
        </p>
      </article>
      <div
        className={
          "relative after:content-[''] after:absolute after:h-full after:-z-10 after:w-full after:top-7 after:left-7 after:border-2 after:border-orange-500"
        }
        style={{ width: "16rem" }}
      >
        <Image src={MyPic} layout={"responsive"} alt="My Profile Image" />
      </div>
    </div>
    // <div className="about-me">
    //   <div className="flex justify-between">
    //     <div className="w-3/4 ">
    //       <p>
    //       </p>
    //
    //       <p>
    //         My dream is to make the meaning of my name come true. My name comes
    //         from Arabic which means positive improvement. I wish to bring
    //         positive improvement for me, my society, my country, and the whole
    //         world. I've taken technology and more specifically IT as my method.
    //         I love to develop software that brings value to people.{" "}
    //       </p>
    //
    //       <p>Some of the technologies that I've recently worked with: </p>
    //       <ul className="grid grid-cols-4 list-disc list-inside">
    //         <li>Python</li>
    //         <li>Django</li>
    //         <li>Javascript</li>
    //         <li>Typescript</li>
    //         <li>React</li>
    //         <li>PostgreSQL</li>
    //         <li>MySQL</li>
    //         <li>DynamoDB</li>
    //         <li>Nginx</li>
    //         <li>AWS</li>
    //       </ul>
    //     </div>
    //     <div className="flex justify-end">
    //       <Image
    //         src={MyPic}
    //       />
    //     </div>
    //   </div>
    // </div>
  )
}
