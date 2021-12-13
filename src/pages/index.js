import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Card from "../components/Card";
import InteractiveCard from "../components/InteractiveCard";
import { Tab, Menu, Transition, Dialog } from "@headlessui/react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  const titles = [
    "Data Rights",
    "Model Ownership",
    "Limitation of Liability",
    "Indemnity",
  ];
  const content = [
    "Content for Slider 1",
    "Content for Slider 2",
    "Content for Slider 3",
    "Content for Slider 4",
  ];
  const NegotiationTable = () => {
    return (
      <table className="w-full text-sm relative overflow-x-auto">
        <thead className="sticky top-0 bg-neutral">
          <tr>
            <th scope="col">{t("tab1-header1")}</th>
            <th scope="col">{t("tab1-header2")}</th>
            <th scope="col">{t("tab1-header3")}</th>
          </tr>
        </thead>
        <tbody className="text-2xs">
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row1-col1")}</td>
            <td>{t("tab1-row1-col2")}</td>
            <td>{t("tab1-row1-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row2-col1")}</td>
            <td>{t("tab1-row2-col2")}</td>
            <td>{t("tab1-row2-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row3-col1")}</td>
            <td>{t("tab1-row3-col2")}</td>
            <td>{t("tab1-row3-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row4-col1")}</td>
            <td>{t("tab1-row4-col2")}</td>
            <td>{t("tab1-row4-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row5-col1")}</td>
            <td>{t("tab1-row5-col2")}</td>
            <td>{t("tab1-row5-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row6-col1")}</td>
            <td>{t("tab1-row6-col2")}</td>
            <td>{t("tab1-row6-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row7-col1")}</td>
            <td>{t("tab1-row7-col2")}</td>
            <td>{t("tab1-row7-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row8-col1")}</td>
            <td>{t("tab1-row8-col2")}</td>
            <td>{t("tab1-row8-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row9-col1")}</td>
            <td>{t("tab1-row9-col2")}</td>
            <td>{t("tab1-row9-col3")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab1-row10-col1")}</td>
            <td>{t("tab1-row10-col2")}</td>
            <td>{t("tab1-row10-col3")}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const PrinciplesTable = () => {
    return (
      <table className="w-full text-sm relative bg-neutral overflow-x-auto">
        <thead className="sticky top-0 bg-neutral">
          <tr>
            <th scope="col">{t("tab2-header1")}</th>
            <th scope="col">{t("tab2-header2")}</th>
          </tr>
        </thead>
        <tbody className="text-2xs">
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row1-col1")}</td>
            <td>{t("tab2-row1-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row2-col1")}</td>
            <td>{t("tab2-row2-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row3-col1")}</td>
            <td>{t("tab2-row3-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row4-col1")}</td>
            <td>{t("tab2-row4-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row5-col1")}</td>
            <td>{t("tab2-row5-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row6-col1")}</td>
            <td>{t("tab2-row6-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row7-col1")}</td>
            <td>{t("tab2-row7-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row8-col1")}</td>
            <td>{t("tab2-row8-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row9-col1")}</td>
            <td>{t("tab2-row9-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row10-col1")}</td>
            <td>{t("tab2-row10-col2")}</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>{t("tab2-row11-col1")}</td>
            <td>{t("tab2-row11-col2")}</td>
          </tr>
        </tbody>
      </table>
    );
  };
  const TableTabs = () => {
    return (
      <div>
        <Tab.Group as="div" className="bg-neutral h-96">
          <Tab.List className="tabs">
            <Tab
              className={({ selected }) =>
                selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
              }
            >
              Negotiation Tactics
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
              }
            >
              Negotiation Mistakes
            </Tab>
          </Tab.List>
          <Tab.Panels class="h-96 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
            <Tab.Panel>
              <NegotiationTable />
            </Tab.Panel>
            <Tab.Panel>
              <PrinciplesTable />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  };
  const LinksTable = () => {
    return (
      <>
        <Tab.Group as="div" className="bg-neutral h-full">
          <Tab.List className="tabs">
            <Tab
              className={({ selected }) =>
                selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
              }
            >
              AI Principles
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
              }
            >
              AI Standards
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "tab tab-lifted tab-active" : "tab tab-lifted"
              }
            >
              Privacy
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-2">
            <Tab.Panel>
              <div className="grid grid-cols-3 gap-3">
                <a
                  target="_blank"
                  className="btn btn-primary text-2xs"
                  href="https://recherche.umontreal.ca/english/strategic-initiatives/montreal-declaration-for-a-responsible-ai/"
                >
                  Montreal Declaration
                </a>
                <a
                  target="_blank"
                  className="btn btn-secondary text-2xs"
                  href="https://www.oecd.org/going-digital/ai/principles/"
                >
                  OECD Principles on AI
                </a>
                <a
                  target="_blank"
                  className="btn btn-accent text-2xs"
                  href="https://www.acm.org/binaries/content/assets/public-policy/2017_joint_statement_algorithms.pdf"
                >
                  ACM Transparency
                </a>
                <a
                  target="_blank"
                  className="btn btn-info text-2xs"
                  href="https://standards.ieee.org/content/dam/ieee-standards/standards/web/documents/other/ead1e-overview.pdf"
                >
                  IEEE – Ethically Aligned Design
                </a>
                <a
                  target="_blank"
                  className="btn btn-primary text-2xs"
                  href="https://www.torontodeclaration.org/"
                >
                  Toronto Declaration
                </a>
                <a
                  target="_blank"
                  className="btn btn-secondary text-2xs"
                  href="https://www.microsoft.com/en-us/ai/responsible-ai"
                >
                  Microsoft AI Principles
                </a>
                <a
                  target="_blank"
                  className="btn btn-accent text-2xs"
                  href="https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai.html"
                >
                  Canada Responsible AI
                </a>
                <a
                  target="_blank"
                  className="btn btn-info text-2xs"
                  href="https://www.ontario.ca/page/ontarios-trustworthy-artificial-intelligence-ai-framework-consultations"
                >
                  Ontario Trustworthy AI Framework
                </a>
                <a
                  target="_blank"
                  className="btn btn-primary text-2xs"
                  href="https://www.un.org/en/chronicle/article/towards-ethics-artificial-intelligence"
                >
                  United Nations
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-1 gap-4">
                <a
                  target="_blank"
                  className="btn btn-primary"
                  href="https://www.iso.org/committee/6794475.html"
                >
                  ISO Standards
                </a>
                <a
                  target="_blank"
                  className="btn btn-secondary text-xs"
                  href="https://ciostrategycouncil.com/standards/"
                >
                  CIO Council Standards
                </a>
                <a
                  target="_blank"
                  className="btn btn-accent text-xs"
                  href="https://standards.ieee.org/industry-connections/ec/autonomous-systems.html"
                >
                  IEEE Standards
                </a>
                <a
                  target="_blank"
                  className="btn btn-info text-xs"
                  href="https://www.nist.gov/artificial-intelligence"
                >
                  NIST Standards
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-flow-row grid-cols-6 grid-rows-3 gap-4">
                <a
                  target="_blank"
                  className="btn btn-primary"
                  href="https://www.priv.gc.ca/en/F"
                >
                  CA
                </a>
                <a
                  className="btn btn-secondary"
                  target="_blank"
                  href="https://www.ipc.on.ca/"
                >
                  ON
                </a>
                <a
                  className="btn btn-accent"
                  target="_blank"
                  href="https://www.oipc.ab.ca/"
                >
                  AB
                </a>
                <a
                  className="btn btn-info"
                  target="_blank"
                  href="https://www.oipc.bc.ca/"
                >
                  BC
                </a>
                <a
                  target="_blank"
                  className="btn btn-success"
                  href="https://www.cai.gouv.qc.ca/english/"
                >
                  QC
                </a>
                <a
                  target="_blank"
                  className="btn btn-secondary"
                  href="https://www.ombudsman.mb.ca/"
                >
                  MB
                </a>
                <a
                  target="_blank"
                  className="btn btn-accent"
                  href="https://oipc.sk.ca/"
                >
                  SK
                </a>
                <a
                  target="_blank"
                  className="btn btn-info"
                  href="https://ombudnb.ca/site/"
                >
                  NB
                </a>
                <a
                  target="_blank"
                  className="btn btn-primary"
                  href="https://www.oipc.nl.ca/"
                >
                  NL
                </a>
                <a
                  target="_blank"
                  className="btn btn-secondary"
                  href="https://www.assembly.pe.ca/offices/information-and-privacy-commissioner"
                >
                  PEI
                </a>
                <a
                  target="_blank"
                  className="btn btn-accent"
                  href="https://oipc.novascotia.ca/"
                >
                  NS
                </a>
                <a
                  target="_blank"
                  className="btn btn-info"
                  href="http://www.ombudsman.yk.ca/"
                >
                  YT
                </a>
                <a
                  target="_blank"
                  className="btn btn-success"
                  href="https://atipp-nt.ca/"
                >
                  NWT
                </a>
                <a
                  target="_blank"
                  className="btn btn-info"
                  href="https://atipp-nu.ca/"
                >
                  NU
                </a>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </>
    );
  };
  const Trailer = () => {
    return (
      <>
        <div className="card shadow-sm bg-neutral text-neutral-content max-w-80 mx-4">
          <figure>
            <iframe
              width="460"
              height="360"
              src="https://www.youtube.com/embed/us7NukgCm1s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
          <div className="card-body">
            <div>
              <a
                target="_blank"
                href="https://osler.teachable.com/p/ai-contracting-for-startup-founders"
                className="btn btn-secondary"
              >
                View Course Info
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Faces = (props) => {
    return (
      <>
        <div className="flex items-center justify-center">
          <div className="relative inline-block text-left">
            <Menu>
              {({ open }) => (
                <>
                  <span className="rounded-md shadow-sm">
                    <Menu.Button className="inline-flex justify-center w-full text-sm font-medium leading-5 rounded-md hover:text-gray-500 focus:outline-none ">
                      <div className="w-16 h-16 mask mask-squircle">
                        <img src={props.img} />
                      </div>
                    </Menu.Button>
                  </span>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className=" z-20 absolute right-0 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                          {props.name}
                        </p>
                      </div>

                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={props.email}
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Email
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#support"
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              LinkedIn
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </>
    );
  };
  const SlideDeck = () => {
    return (
      <div className="">
        <Carousel className="h-72">
          <div>
            <img src="/slide1.png" />
          </div>
          <div>
            <img src="/slide2.png" />
          </div>
          <div>
            <img src="/slide3.png" />
          </div>
          <div>
            <img src="/slide4.png" />
          </div>
        </Carousel>
      </div>
    );
  };
  return (
    <div
      // data-theme="osler"
      className="min-h-screen dark"
    >
      <Head>
        <title>{t("page-title")}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* className="md:container md:mx-auto" */}
      <div className="md:container md:mx-auto">
        {/* sticky top-0  */}

        <div className="hero min-h-screen">
          <div className="text-center hero-content">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-4xl sm:text-6xl font-bold text-neutral-content">
                {t("hero-title")}
              </h1>
              <p className="text-lg sm:text-xl font-bold mb-5">
                {t("hero-subtitle")}
              </p>
              <a className="btn btn-primary" href="#static">
                {" "}
                {t("hero-button")}
              </a>
            </div>
          </div>
        </div>
        {/* <h1
          className="text-center mb-5 text-3xl sm:text-5xl font-bold text-neutral-content"
          id="static"
        >
          {t("static-header")}
        </h1> */}
        {/* <h1 className="mt-20 flex-shrink text-center mb-5 text-3xl sm:text-5xl font-bold text-neutral-content">
          {t("interactive-header")}
        </h1> */}

        <div
          className="flex items-center justify-center card glass"
          id="static"
        >
          <div class="navbar text-neutral-content rounded-box min-w-full relative z-20">
            <div class="flex-1 px-2 mx-2">
              <span class="text-2xl font-bold">{t("interactive-header")}</span>
            </div>
            <div class="hidden px-2 mx-2 navbar-center lg:flex">
              <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">{t("about")}</a>
                <a class="btn btn-ghost btn-sm rounded-btn">Français</a>
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-3 grid-cols-1 grid-flow-row my-5 space-y-2">
            <div className="lg:row-span-3">
              <Card title="General Contract Principles" content={TableTabs()} />
            </div>
            <div className="lg:row-span-3">
              <Trailer />
            </div>
            <div className="lg:row-span-2">
              <Card title="AI Slide Deck" content={<SlideDeck />} />
            </div>
            <div className="row-span-1 self-center">
              <div className="text-center text-lg font-bold">
                {t("talk-to-us")}
              </div>
              <div className="flex justify-evenly">
                <Faces
                  img="sip.jpg"
                  name="Sam Ip"
                  email="mailto:sip@osler.com"
                />
                <Faces
                  img="sselincourt.jpg"
                  name="Shaya Selincourt"
                  email="mailto:sselincourt@osler.com"
                />
                <Faces
                  img="samyot.jpg"
                  name="Sophie Amyot"
                  email="mailto:samyot@osler.com"
                />
              </div>
            </div>
            <div className="lg:row-span-3">
              <Card
                title="AI Quick References"
                content={LinksTable()}
                isReference="true"
              />
            </div>
            <div className="lg:row-span-3 lg:col-span-2">
              <InteractiveCard title={titles} text={content} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10 mt-5">
          <div class="shadow stats max-w-2xl">
            <div class="stat bg-primary">
              <div class="stat-title">Total Page Views</div>
              <div class="stat-value">121</div>
              <div class="stat-desc">10% more than last month</div>
            </div>
            <div class="stat bg-info">
              <div class="stat-title">Number of New Users</div>
              <div class="stat-value">2</div>
              <div class="stat-desc">12% more than last month</div>
            </div>
          </div>
        </div>
      </div>
      <footer class="p-4 footer bg-neutral text-base-content footer-center">
        <div>
          <p>
            Copyright © 2021 - All right reserved by Osler, Hoskin, and Harcourt
            LLP
          </p>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "contract-provisions",
      ])),
      // Will be passed to the page component as props
    },
  };
}
