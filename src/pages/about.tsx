import Layout from "../components/Layout";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { stepperData } from "../constant/navData";

export default function about() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-5 mt-12">
        <StaticImage
          className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
          src="../images/brainlessprogrammer.jpg"
          alt="logo"
          quality={40}
          placeholder="tracedSVG"
        />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
            Brainless Programmer
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full justify-center">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                {stepperData.map((item: any, idx: any) => (
                  <div
                    className={`flex relative ${
                      idx + 1 === stepperData.length ? `` : `pb-12`
                    }`}
                  >
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primaryTheme inline-flex items-center justify-center text-white relative z-10">
                      {item.icon}
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        {item.name}
                      </h2>
                      <p className="leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <StaticImage
                className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="../images/brainlessprogrammer.jpg"
                alt="logo"
                quality={40}
                placeholder="tracedSVG"
              /> */}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
