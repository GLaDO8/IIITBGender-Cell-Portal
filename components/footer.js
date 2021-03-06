export default function Footer() {
  return (
    <>
      <div className="bottom-0 w-full mx-auto max-w-lg md:max-w-3xl lg:max-w-4xl mb-16 text-xs">
        <p>
          Gender Cell Portal is a committee of IIIT Bangalore. This website was
          built by{" "}
          <a
            href="https://www.linkedin.com/in/tejaskotha/"
            target="_blank"
            className="link-styling"
          >
            Tejas Kotha
          </a>{" "}
          (iMtech 2016) and{" "}
          <a
            href="https://www.linkedin.com/in/shreyas-gupta/"
            target="_blank"
            className="link-styling"
          >
            Shreyas Gupta
          </a>{" "}
          (iMtech 2016) using Next.js and Tailwind CSS.{" "}
        </p>
      </div>
    </>
  );
}
