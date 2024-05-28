import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import img from "../public/img/avatar.png";
import Head from "next/head";

const About = () => {
  const listSkills = [
    {
      bg: "rgb(216, 44, 32)",
      name: "HTML",
    },
    {
      bg: "rgb(21, 114, 182)",
      name: "CSS",
    },
    {
      bg: "rgb(204, 102, 153)",
      name: "Sass",
    },
    {
      bg: "rgb(247, 224, 24)",
      name: "Javascript",
    },
    {
      bg: "rgb(0, 122, 204)",
      name: "Typescript",
    },
    {
      bg: "rgb(97, 218, 251)",
      name: "ReactJs",
    },
    {
      bg: "rgb(0, 0, 0)",
      name: "NextJs",
    },
    {
      bg: "rgb(79, 192, 141)",
      name: "VueJs",
    },
    {
      bg: "rgba(59, 158, 113, 1)",
      name: "NuxtJs",
    },
    {
      bg: "rgb(221, 0, 49)",
      name: "Angular",
    },
    {
      bg: "rgb(1, 112, 254)",
      name: "AntDesign",
    },
    {
      bg: "rgb(0, 129, 203)",
      name: "MUI",
    },
    {
      bg: "rgb(225, 0, 152)",
      name: "Graphql",
    },
    {
      bg: "rgb(242, 78, 30)",
      name: "Figma",
    },
    {
      bg: "rgb(109, 179, 63)",
      name: "NodeJs",
    },
    {
      bg: "rgb(204 65 96)",
      name: "NestJs",
    },
    {
      bg: "rgb(0, 104, 74)",
      name: "MongoDB",
    },
  ];
  useEffect(() => {
    const text = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>About Vitamindev</title>
        <meta name="About Vitamindev" content="About Vitamindev"></meta>
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="container mx-auto" data-aos="fade-up">
          <div className="mx-10 mb-20">
            <div className="text-4xl font-bold">About me</div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>
          </div>

          <div className="mx-10 md:flex">
            <div className="flex flex-col justify-center md:mx-5">
              <div className="flex justify-center">
                <div className="my-avatar">
                  <Image
                    className="logo2"
                    src={img}
                    alt="a"
                    width={150}
                    height={150}
                  />
                  <div className="text">
                    <p className="font-bold">
                      Nguyễn Thanh Thiên - Web Developer -{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mx-32">
              <p className="mb-6 text-lg">
                Tôi là Thiên. Hiện đang sinh sống và làm việc tại Hà nội. Đây là
                nơi tôi lưu trữ cũng như chia sẻ những kiến thức lập trình mình
                biết. Vì tôi biết cách tiếp thu kiến thức tốt nhất là chia sẻ.
                Tôi đã có 3 năm kinh nghiệm làm việc tại ví trí lập trình viên
                front-end với đa dạng framework ReactJS, Angular và VueJS. Có
                kiến thức về lập trình về back-end với NodeJs và thường xuyên
                làm việc với NestJs framework.
              </p>

              <a
                href="https://drive.google.com/file/d/1QS6Vo38BAR55vkQuxg8qw-UVvLxT56aH/view?usp=sharing"
                target="_blank"
                className="mb-6 text-lg text-blue-500 underline"
                rel="noreferrer"
              >
                Download MyCV
              </a>
              <div className="mb-3 text-xl">My Skills</div>
              <div className="flex flex-wrap">
                {listSkills &&
                  listSkills?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className="px-2 py-1 mb-2 mr-2 text-xs font-medium text-white rounded-sm"
                        style={{ background: item.bg }}
                      >
                        {item.name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
