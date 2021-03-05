import Head from "next/head";
import Image from "next/image";
import Layout from "./../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1 className="title-style">Faculty Members</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-6 mt-12 mb-64 items-center">
            <div className="rounded-full overflow-hidden mt-8">
              <Image
                src="/meenakshi.jpg"
                alt="Image of Prof.Meenakshi"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-span-3 mt-8">
              <p>
                <a
                  className="cursor-pointer link-styling"
                  href="https://www.iiitb.ac.in/faculty/meenakshi-dsouza"
                >
                  Prof. Meenakshi D’ Souza
                </a>{" "}
                is an Associate Professor and former Warden (Women's hostel) at
                IIIT Bangalore. She has been at the forefront of tackling
                gender-related issues on the campus since she joined. She heads
                the Gender Cell and Internal Complaints Committee at the campus.
              </p>
            </div>
            <div className="rounded-full overflow-hidden mt-8">
              <Image
                src="/janaki.jpg"
                alt="Image of Prof. Janaki"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-span-3 mt-8">
              <p>
                <a
                  className="cursor-pointer link-styling"
                  href="https://www.iiitb.ac.in/faculty/janaki-srinivasan"
                >
                  Janaki Srinivasan
                </a>
                ’s research examines the political economy of information
                technology-based development initiatives. She uses ethnographic
                research to examine how gender, caste and class shape the use of
                such technologies. Her work has explored these interests in the
                context of Indian digital inclusion initiatives focussed on
                community computer centres, mobile phones, identity systems and
                open information systems. Currently, she is exploring privacy,
                algorithmic control and the role of intermediaries in digital
                transactions, with an emphasis on the domains of financial
                inclusion and work automation. Janaki has a PhD in Information
                Management and Systems from UC Berkeley and Masters degrees in
                Physics and in Information Technology from IIT Delhi and IIIT
                Bangalore.
              </p>
            </div>

            <div className="rounded-full overflow-hidden mt-8">
              <Image
                src="/Prof__Chetan_Parikh_.jpg"
                alt="Image of Prof. Janaki"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-span-3 mt-8">
              <p>
                <a
                  className="cursor-pointer link-styling"
                  href="https://www.iiitb.ac.in/faculty/chetan-parikh"
                >
                  Chetan Parikh
                </a>{" "}
                obtained his BTech from IIT-Bombay, and MS and PhD from the
                University of Florida, Gainesville, all in Electrical
                Engineering. Prior to joining IIITB, he has been a faculty
                member at IIT-Bombay, DAIICT-Gandhinagar, and the Institute of
                Engineering & Technology at Ahmedabad University. He was also a
                Visiting Faculty at Purdue University and the University of
                Missouri, and worked at Motorola/Freescale, Austin, Texas. His
                current interests are in analog and mixed-signal circuit design.
                Since July, 2015, he is a Professor at IIIT-Bangalore.
                Currently, he also serves as Coordinator of the Mentoring Cell
                for Myanmar Institute of Information Technology. In his spare
                time, he likes to read fiction on the one hand, and spiritual
                writings on the other, particularly the writings of the Baha'i
                Faith, of which he has been an ardent follower for more than 30
                years.
              </p>
            </div>

            <h1 className="title-style col-span-4 mt-16">Admin Members</h1>
            <div className="rounded-full overflow-hidden mt-8">
              <Image
                src="/Cmde-SR-Sridhar-(Retd)-Registrar.jpg"
                alt="Image of Cmde. Sridhar"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-span-3 mt-8">
              <p>
                <a
                  className="cursor-pointer link-styling"
                  href="https://www.iiitb.ac.in/administration/cmde-sr-sridhar-retd-2"
                >
                  Commodore SR Sridhar
                </a>{" "}
                (Retd) has joined the institute after prematurely retiring from
                the Indian Navy. He served in the India Navy for 29 years. He
                was commissioned in the Indian Navy in August 1987 in the
                Education Branch of the Indian Navy and has held various
                important assignments including Registrar, Indian Naval
                Academy,ADNE (Exams), Naval Headquarters, New Delhi, Command
                Education Officer, Southern Naval Command, Kochi and Deputy
                Director, Naval Institute of Educational and Training
                Technology, Kochi.​ He is very passonate about "Training of
                Trainer" domain and is a Resource Person in the field.
              </p>
            </div>
            <div className="rounded-full overflow-hidden mt-8">
              <Image
                src="/Cynthia-DMello.jpg"
                alt="Image of Prof. Janaki"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="col-span-3 mt-8">
              <p>
                <a
                  className="cursor-pointer link-styling"
                  href="https://www.iiitb.ac.in/administration/cynthia-dmello"
                >
                  Cynthia DMello
                </a>{" "}
                is a Staff Officer to Deans' Office Reported at IIITB on
                08/09/2014. Prior to joining IIITB has worked in 4 years in St
                John's Medical College Hospital, 3.5 years in National
                Assessment and Accreditaiton Council, and 24 years in Karnataka
                State Council for Science and Technology, IISC Campus.​
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
