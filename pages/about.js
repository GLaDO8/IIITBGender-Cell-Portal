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
          <div className="flex flex-row">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/meenakshi.jpg"
                alt="Image of Prof.Meenakshi"
                width={320}
                height={320}
                layout="responsive"
              />
            </div>
            <div>
              <p>
                Prof. Meenakshi D’ Souza is an Associate Professor and former
                Warden (Women's hostel) at IIIT Bangalore. She has been at the
                forefront of tackling gender-related issues on the campus since
                she joined. He heads the Gender Cell and Internal Complaints
                Committee at the campus.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
