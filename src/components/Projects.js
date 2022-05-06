import * as React from "react"
export function Projects() {
  return (
    <div className="projects">
      <ul>
        <li>
          <h2 className="text-2xl">MS Portal @ CSE DU</h2>
          <p>
            A web portal developed for candidates to apply for the MS Program of
            Department of CSE, University of Dhaka. Candidates can register by
            providing their details and proceed to pay the admission fees
            online. Admit cards and results are published through the portal as
            well
          </p>
          <ul className="flex">
            <li className="">PHP</li>
            <li className=" ml-2">Laravel</li>
            <li className=" ml-2">Javascript</li>
            <li className=" ml-2">Vue</li>
            <li className=" ml-2">MySQL</li>
            <li className=" ml-2">SSLCommerz</li>
          </ul>
        </li>
        <li>
          <h2 className="text-2xl">Crowdfunding Application @ CSE DU</h2>
          <p>
            A web application to collect funding and donation for various
            internal projects at CSEDU. The application offered an admin panel
            with CMS functionalities to post projects and monitor transactions.
            The public portal allowed users both local and foreign to browse the
            different projects and donate using cards.
          </p>
          <ul className="flex">
            <li className="">PHP</li>
            <li className=" ml-2">Laravel</li>
            <li className=" ml-2">Javascript</li>
            <li className=" ml-2">Vue</li>
            <li className=" ml-2">MySQL</li>
            <li className=" ml-2">SSLCommerz</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
