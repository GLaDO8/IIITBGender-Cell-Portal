import Head from "next/head";
import Meta from "./../components/meta";
import Link from "next/link";
import NavBar from "./../components/navbar";
import Buttonlist from "./../components/buttonlist";

export default function Home() {
  return (
    <div className="">
      <Meta />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <NavBar navButtons={Buttonlist} />
        </div>
        <div className="mx-auto max-w-3xl">
          <div>
            <h1 className="title-style">Who are we?</h1>
            <p>
              IIIT Bangalore’s Gender Cell is an institutional body that works
              towards promoting equality, nondiscrimination and gender justice
              on the campus. It inquires into complaints of sexual harassment.
            </p>
          </div>
          <div>
            <h1 className="title-style">What do we do?</h1>
            <p>
              The Gender Cell inquires into complaints of sexual harassment.
              Sexual harassment includes any one or more of the following
              unwelcome acts or behavior: 1.Physical contact and advances; 2.A
              demand or request for sexual favors; 3.Making sexually colored
              remarks; 4.Sending, displaying, or showing pornographic material
              in physical form or through any electronic media; 5.Any other
              unwelcome physical, verbal or non-verbal conduct of sexual nature,
              and 6.Any other acts or omissions that are of like nature to the
              instances above.
            </p>
          </div>
          <div>
            <h1 className="title-style">Need Assistance?</h1>
            <p>
              Any student, faculty, staff member or a service provider who is
              associated with IIITB may contact the Gender Cell.
            </p>
            <div className="flex flex-row items-center mb-48">
              <div>
                <Link href="mailto: meenakshi@iiitb.ac.in">
                  <button className="flex cursor-pointer rounded-md mt-4 mr-6">
                    <div className="pr-2 text-black font-medium hover:underline">
                      Mail a Representative
                    </div>
                    <div>
                      <img
                        src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=000"
                        width="22"
                        height="22"
                        alt="right arrow icon"
                      />
                    </div>
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/typeform">
                  <button className="flex bg-white cursor-pointer rounded-md mt-4">
                    <div className="pr-2 text-black font-medium hover:underline">
                      Lodge a Complaint
                    </div>
                    <div>
                      <img
                        src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=000"
                        width="22"
                        height="22"
                        alt="right arrow icon"
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
