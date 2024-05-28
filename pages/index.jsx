import Head from "next/head";
import Link from "next/link";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function MyProfile() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Vitamindev</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta
          name="Vitamindev"
          content="Kiên thức lập trình, front-end, back-end"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Header />

        <div className="mb-auto section" data-aos="fade-up">
          <div className="container py-40 mx-auto md:py-64 pl-11 md:pl-80">
            <div className="mb-5 text-4xl font-extrabold md:text-5xl">
              Hi, I am Thiên
            </div>
            <div className="mb-5 text-xl md:text-2xl">Web developer</div>
            <div className="text-lg md:text-xl">
              Read more{" "}
              <Link href="/about">
                <span className="p-1 bg-orange-300 cursor-pointer rounded-tl-2xl rounded-br-2xl">
                  about me
                </span>
              </Link>{" "}
              or{" "}
              <Link href="/contact">
                <span className="p-1 cursor-pointer bg-violet-300 rounded-tr-2xl rounded-bl-2xl">
                  contact me
                </span>
              </Link>{" "}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
