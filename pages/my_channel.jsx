import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import youtube from "../public/img/icons-youtube.png";
import Image from "next/image";
import Head from "next/head";

const MyChanel = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Vitamindev Chanel</title>
        <meta name="Vitamindev Chanel" content="Vitamindev Chanel"></meta>
      </Head>
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <div className="container mx-auto" data-aos="fade-up">
          <div className="mx-10 mb-20">
            <div className="text-4xl font-bold">Youtube Chanel</div>
            <div className="w-40 h-1 bg-orange-300 rounded"></div>

            <div className="sm:flex p-8 gap-10 my-10 cursor-pointer shadow-[rgba(0, 0, 0, 0.35)] shadow-xl">
              <iframe
                className="sm:w-[560px] w-[300px]"
                height="315"
                src="https://www.youtube.com/embed/ay9pXgJxUB8?si=Espm0zTulSbpxCbH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="my-4 text-xl font-semibold sm:mb-4 sm:mt-0">
                  Dự án tên Axios. Là một sản phẩm e-commerce sử dụng ReactJs,
                  NextJs, NestJs, MySql, Sequelize. Lưu trữ hình ảnh bằng
                  FireBase.
                </p>
                <div className="text-sm">
                  <p>
                    Được xây dựng dựa trên framework Nestjs cho backend, Nextjs
                    và Tailwindcss cho phần website khách hàng, Reactjs và Antd
                    cho phần website quản trị.
                  </p>
                  <p>&#10155; Phía Client</p>
                  <ul className="pl-5 list-disc">
                    <li>
                      Đăng ký, đăng nhập, đăng nhập bằng google, quên mật khẩu
                      (reset mật khẩu).
                    </li>
                    <li>Gửi email liên hệ.</li>
                    <li>
                      Giỏ hàng, Mua hàng, Thanh toán online vnpay, Thanh toán
                      COD, Lịch sử mua hàng.
                    </li>
                    <li>
                      Tìm kiếm sản phẩm, Xem chi tiết sản phẩm, Bình luận, Đánh
                      giá sản phẩm.
                    </li>
                  </ul>
                  <p>&#10155; Phía Admin</p>
                  <ul className="pl-5 list-disc">
                    <li>Thống kê doanh thu.</li>
                    <li>
                      Quản lý danh mục, sản phẩm, phân loại hàng, tài khoản ,
                      đơn hàng, đánh giá..
                    </li>
                    <li>Thay đổi mật khẩu , tên user, avatar.</li>
                    <li>Phân quyền cho user, staff, admin.</li>
                  </ul>

                  <div
                    className="flex items-center gap-2 p-3 mt-4 text-white duration-300 ease-in-out rounded bg-stone-800 w-max hover:scale-110"
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=ay9pXgJxUB8")
                    }
                  >
                    <Image src={youtube} alt="youtube" />
                    <div>Xem Trên Youtube</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex p-8 gap-10 my-10 cursor-pointer shadow-[rgba(0, 0, 0, 0.35)] shadow-xl">
              <iframe
                className="sm:w-[560px] w-[300px]"
                height="315"
                src="https://www.youtube.com/embed/tikI2VbHX6k?si=BnGjt87r17JduwP2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="my-4 text-xl font-semibold sm:mb-4 sm:mt-0">
                  Dự án tên Axios. Là một sản phẩm e-commerce sử dụng Angular,
                  NestJs, MySql, Sequelize. Lưu trữ hình ảnh bằng FireBase.
                </p>
                <div className="text-sm">
                  <p>
                    Được xây dựng dựa trên framework Nestjs cho backend,
                    Angular, PrimeNg, NgRx-Store cho phần website khách hàng và
                    quản trị.
                  </p>
                  <p>&#10155; Phía Client</p>
                  <ul className="pl-5 list-disc">
                    <li>
                      Đăng ký, đăng nhập, đăng nhập bằng google, quên mật khẩu
                      (reset mật khẩu).
                    </li>
                    <li>Gửi email liên hệ.</li>
                    <li>
                      Giỏ hàng, Mua hàng, Thanh toán online vnpay, Thanh toán
                      COD, Lịch sử mua hàng.
                    </li>
                    <li>
                      Tìm kiếm sản phẩm, Xem chi tiết sản phẩm, Bình luận, Đánh
                      giá sản phẩm.
                    </li>
                  </ul>
                  <p>&#10155; Phía Admin</p>
                  <ul className="pl-5 list-disc">
                    <li>Thống kê doanh thu.</li>
                    <li>
                      Quản lý danh mục, sản phẩm, phân loại hàng, tài khoản ,
                      đơn hàng, đánh giá..
                    </li>
                    <li>Thay đổi mật khẩu , tên user, avatar.</li>
                    <li>Phân quyền cho user, staff, admin.</li>
                  </ul>

                  <div
                    className="flex items-center gap-2 p-3 mt-4 text-white duration-300 ease-in-out rounded bg-stone-800 w-max hover:scale-110"
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=tikI2VbHX6k")
                    }
                  >
                    <Image src={youtube} alt="youtube" />
                    <div>Xem Trên Youtube</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex p-8 gap-10 my-10 cursor-pointer shadow-[rgba(0, 0, 0, 0.35)] shadow-xl">
              <iframe
                className="sm:w-[560px] w-[300px]"
                height="315"
                src="https://www.youtube.com/embed/t4FG_6Ffmhw?si=R6RxCk6pYIRoc7rW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="my-4 text-xl font-semibold sm:mb-4 sm:mt-0">
                  Dự án tên Axios. Là một sản phẩm e-commerce sử dụng VueJs,
                  NuxtJs, NestJs, MySql, Sequelize. Lưu trữ hình ảnh bằng
                  FireBase.
                </p>
                <div className="text-sm">
                  <p>
                    Được xây dựng dựa trên framework Nestjs cho backend, Nuxtjs
                    và Tailwindcss cho phần website khách hàng, Vuejs và
                    ElementUI cho phần website quản trị.
                  </p>
                  <p>&#10155; Phía Client</p>
                  <ul className="pl-5 list-disc">
                    <li>
                      Đăng ký, đăng nhập, đăng nhập bằng google, quên mật khẩu
                      (reset mật khẩu).
                    </li>
                    <li>Gửi email liên hệ.</li>
                    <li>
                      Giỏ hàng, Mua hàng, Thanh toán online vnpay, Thanh toán
                      COD, Lịch sử mua hàng.
                    </li>
                    <li>
                      Tìm kiếm sản phẩm, Xem chi tiết sản phẩm, Bình luận, Đánh
                      giá sản phẩm.
                    </li>
                  </ul>
                  <p>&#10155; Phía Admin</p>
                  <ul className="pl-5 list-disc">
                    <li>Thống kê doanh thu.</li>
                    <li>
                      Quản lý danh mục, sản phẩm, phân loại hàng, tài khoản ,
                      đơn hàng, đánh giá..
                    </li>
                    <li>Thay đổi mật khẩu , tên user, avatar.</li>
                    <li>Phân quyền cho user, staff, admin.</li>
                  </ul>

                  <div
                    className="flex items-center gap-2 p-3 mt-4 text-white duration-300 ease-in-out rounded bg-stone-800 w-max hover:scale-110"
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=t4FG_6Ffmhw")
                    }
                  >
                    <Image src={youtube} alt="youtube" />
                    <div>Xem Trên Youtube</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:flex p-8 gap-10 my-10 cursor-pointer shadow-[rgba(0, 0, 0, 0.35)] shadow-xl">
              <iframe
                className="sm:w-[560px] w-[300px]"
                height="315"
                src="https://www.youtube.com/embed/4CFz9UJSf7k?si=3EbJ97pc8wQOTrD0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="my-4 text-xl font-semibold sm:mb-4 sm:mt-0">
                  Event Bus trong Nuxtjs sử dụng thư viện mitt.
                </p>
                <div className="text-sm">
                  <p>
                    Giải quyết bài toán đồng bộ số đơn hàng trong giỏ hàng ở
                    navbar sử dụng event bus với thư viện mitt cho dự án Nuxt.js
                  </p>

                  <div
                    className="flex items-center gap-2 p-3 mt-4 text-white duration-300 ease-in-out rounded bg-stone-800 w-max hover:scale-110"
                    onClick={() =>
                      window.open("https://www.youtube.com/watch?v=4CFz9UJSf7k")
                    }
                  >
                    <Image src={youtube} alt="youtube" />
                    <div>Xem Trên Youtube</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MyChanel;
