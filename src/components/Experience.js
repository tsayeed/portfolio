import * as React from "react"
import { Fragment } from "react"
import { Tab } from "@headlessui/react"

export function Experience() {
  return (
    <div className="flex">
      <Tab.Group vertical>
        <Tab.List className="text-xl w-52 flex flex-col">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  "w-16 " + selected
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }
              >
                Tab 1
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected ? "bg-blue-500 text-white" : "bg-white text-black"
                }
              >
                Tab 2
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <h2>Fullstack Developer @ ReformedTech</h2>
            <p>June 2021 - Present</p>
            <ul>
              <li>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects{" "}
              </li>
              <li>
                Work with a variety of different languages, platforms, and
                frameworks such as JavaScript, Vue, Python, Falcon, Stripe, AWS,
                Redis, and MySQL
              </li>
              <li>
                Communicate with multi-disciplinary teams of engineers,
                designers, and clients on a daily basis
              </li>
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <h2>Software Engineer @ Brick Line Technology</h2>
            <p>December 2018 - June 2021</p>
            <ul>
              <li>
                Architected and implemented the front-end of a highly
                interactive client facing online learning platform that allowed
                students to enroll in courses posted by teachers and teachers to
                manage their students
              </li>
              <li>
                Engineered and maintained the distributed cloud native
                microservice oriented backend to ensure uptime and performance
              </li>
              <li>
                Work with a variety of different languages, platforms,
                frameworks, and content management systems such as JavaScript,
                TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                Netlify
              </li>
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    // <Tab.Container className="experience" defaultActiveKey="first">
    //   <Row>
    //     <Col sm={3}>
    //       <Nav variant="pills" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link eventKey="first">ReformedTech</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="second">Brickline Technology</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </Col>
    //     <Col sm={9}>
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first">
    //           <h2>Fullstack Developer @ ReformedTech</h2>
    //           <p>June 2021 - Present</p>
    //           <ul>
    //             <li>Write modern, performant, maintainable code for a diverse array of client and internal projects </li>
    //             <li>Work with a variety of different languages, platforms, and frameworks such as JavaScript, Vue, Python, Falcon, Stripe, AWS, Redis, and MySQL</li>
    //             <li>Communicate with multi-disciplinary teams of engineers, designers, and clients on a daily basis</li>
    //           </ul>
    //         </Tab.Pane>
    //         <Tab.Pane eventKey="second">
    //           <h2>Software Engineer @ Brick Line Technology</h2>
    //           <p>December 2018 - June 2021</p>
    //           <ul>
    //             <li>Architected and implemented the front-end of a highly interactive client facing online learning platform that allowed students to enroll in courses posted by teachers and teachers to manage their students</li>
    //             <li>Engineered and maintained the distributed cloud native microservice oriented backend to ensure uptime and performance</li>
    //             <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
    //           </ul>
    //         </Tab.Pane>
    //       </Tab.Content>
    //     </Col>
    //   </Row>
    // </Tab.Container>
  )
}
