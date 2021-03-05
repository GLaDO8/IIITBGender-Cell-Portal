import Head from "next/head";
import Link from "next/link";
import Layout from "./../components/layout";
export default function Resources() {
  return (
    <>
      <Layout>
        <Head>
          <title>Resources</title>
        </Head>
        <div className="mb-24">
          <h1 className="title-style mb-8">Resources and Links</h1>
          <p>
            IIIT Bangalore maintains a policy document for the Internal
            Complaints Committee to prevennt Sexual Harrassment of Women at
            Workplace. You can access the entire document{" "}
            <a
              href="/ICC-policy-IIIT-Bangalore.pdf"
              className="cursor-pointer text-blue-600 hover:underline"
              target="_blank"
            >
              here.
            </a>
          </p>
          <br />
          <h3 className="font-medium text-lg mt-8">
            Below are additional links to policy documents by UGC and the
            Government of India.{" "}
          </h3>
          <br />
          <ul className="ml-6">
            <li className="list-disc">
              <p>
                The Sexual Harassment of Women at Workplace(Prevention,
                Prohibition and Redressal) Act, 2013, Government of India.{" "}
                <em>
                  (
                  <a
                    href="https://legislative.gov.in/sites/default/files/A2013-14.pdf"
                    className="cursor-pointer text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Link
                  </a>
                  )
                </em>
              </p>
            </li>
            <li className="list-disc">
              <p>
                Saksham - Measures for Ensuring the Safety of Women and
                Programmes for Gender Sensitization on Campuses, University
                Grants Commission.{" "}
                <em>
                  (
                  <a
                    href="https://www.ugc.ac.in/pdfnews/5873997_SAKSHAM-BOOK.pdf"
                    className="cursor-pointer text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Link
                  </a>
                  )
                </em>
              </p>
            </li>
            <li className="list-disc">
              <p>
                Handbook on Sexual Harassment of Women at Workplace, Ministry of
                Women and Child Development, Government of India.{" "}
                <em>
                  (
                  <a
                    href="https://wcd.nic.in/sites/default/files/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf"
                    className="cursor-pointer text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Link
                  </a>
                  )
                </em>
              </p>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}
