import Head from "next/head";
import Link from "next/link";
import Layout from "./../components/layout";
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Gender Cell Portal - IIITB</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div>
            <div className="mb-12">
              <h1 className="title-style">Who are we?</h1>
              <p>
                IIIT Bangalore’s Gender Cell is an institutional body that works
                towards promoting equality, nondiscrimination and gender justice
                on the campus. It organises workshops, seminars and inquires
                into matters of misconduct.
              </p>
              <br />
              <p>
                ICC (separate from Gender Cell) is a government mandated body
                which inquires specifically in the matters of sexual harassment.
              </p>
            </div>
            <div className="mb-12">
              <h1 className="title-style">What do we do?</h1>
              <p>
                The Cell works proactively towards developing a safe and secure
                environment for all students so that they may gain their
                education without fear of prejudice, gender bias, hostility or
                sexual harassment. The Gender Cell is committed to the following
                goals,
              </p>
              <br />
              <ul className="list-disc pl-6">
                <li>
                  Gender Amity - Promoting gender equality, gender-justice and
                  non-discrimination
                </li>
                <li>
                  Inquiry and Action - Inquires into complaints and recommends
                  action
                </li>
              </ul>
            </div>
            <div className="mb-12">
              <h1 className="title-style">Need Assistance?</h1>
              <p>
                Any student, faculty, staff member or a service provider who is
                associated with IIITB may contact the Gender Cell.
              </p>
              <br />
              <p>
                Complaints lodged through the form below will be automatically
                redirected to the respective body based on the class of offense.{" "}
              </p>
              <div className="flex flex-col md:flex-row md:items-center mb-48">
                <div className="flex-1 md:flex-initial">
                  <Link href="mailto: meenakshi@iiitb.ac.in">
                    <button className="flex cursor-pointer bg-black items-center rounded-md mt-4 mr-6 p-3 px-4">
                      <div className="pr-2 text-white font-medium text-sm lg:text-base">
                        Mail a Representative
                      </div>
                      <div>
                        <img
                          src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff"
                          width="22"
                          height="22"
                          alt="right arrow icon"
                        />
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="flex-1 md:flex-initial">
                  <Link
                    href="https://forms.office.com/Pages/ResponsePage.aspx?id=MebC3lbWPEev_0RwCJadLxuwTdfpsANMrxbpe5A1UUVUNTBWME43OUsxRUFTQ1cwUTNROVlZVlM2TS4u"
                    target="_blank"
                  >
                    <button className="flex bg-black cursor-pointer items-center rounded-md mt-4 p-3 px-4">
                      <div className="pr-2 text-white text-sm lg:text-base font-medium hover:link-styling">
                        Lodge a Complaint
                      </div>
                      <div>
                        <img
                          src="https://s.svgbox.net/hero-solid.svg?ic=arrow-right&fill=fff"
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
      </Layout>
    </>
  );
}
