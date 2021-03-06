import Head from "next/head";
import Image from "next/image";
import Layout from "./../components/layout";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function News() {
  return (
    <>
      <Layout>
        <Head>
          <title>News</title>
        </Head>
        <div className="mb-16">
          <h1 className="title-style mb-16">Latest News</h1>
          <h2 className="subtitle-style">Women's Day Celebrations, 2020</h2>
          <div>
            <div className="mb-2">
              <Image
                src="/images/2020/DSC_0208.jpg"
                alt=""
                width="1149"
                height="610"
                layout="responsive"
                className="rounded-lg overflow-hidden"
              />
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            >
              <Masonry gutter="12px">
                <Image
                  src="/images/2020/DSC_0176.jpg"
                  alt=""
                  width="852"
                  height="723"
                  layout="responsive"
                  className="rounded-lg overflow-hidden"
                />
                <Image
                  src="/images/2020/DSC_0151.jpg"
                  alt=""
                  width="1040"
                  height="717"
                  layout="responsive"
                  className="rounded-lg overflow-hidden"
                />
                <Image
                  src="/images/2020/DSC_0183.jpg"
                  alt=""
                  width="1202"
                  height="648"
                  layout="responsive"
                  className="rounded-lg overflow-hidden"
                />
                <Image
                  src="/images/2020/DSC_0192.jpg"
                  alt=""
                  width="1200"
                  height="640"
                  layout="responsive"
                  className="rounded-lg overflow-hidden"
                />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div>
            <h2 className="subtitle-style mt-16">
              Women's Day Celebrations, 2018
            </h2>
            <div className="mb-2">
              <Image
                src="/images/2018/MIME-act-2018-1.jpg"
                alt=""
                width="1024"
                height="681"
                layout="responsive"
                className="rounded-lg overflow-hidden"
              />
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
            >
              <Masonry gutter="12px">
                <Image
                  src="/images/2018/MIME-act-2018-2.jpg"
                  alt=""
                  width="1024"
                  height="681"
                  layout="responsive"
                  className="rounded-lg overflow-hidden"
                />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </Layout>
    </>
  );
}
