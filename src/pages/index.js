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

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  const tableDescription = `Change the tab to view a different table.`;
  const titles = ["Data", "Models", "Indemnity", "Liability"];
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
            <th scope="col">Tactics</th>
            <th scope="col">Explanation</th>
            <th scope="col">Example</th>
          </tr>
        </thead>
        <tbody className="text-2xs">
          <tr className="bg-base-100 border-2 border-neutral">
            <td>THROWING JUNK</td>
            <td>
              Information that is delivered tactically to weaken the other
              party’s position
            </td>
            <td>
              “Well, the seats aren’t in great condition. I’m not crazy about
              the color either.”
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>PERSUASION</td>
            <td>
              Cause the other party to do something through reasoning or
              argument.
            </td>
            <td>
              “We need to evaluate this decision from a total cost of ownership
              standp­oint.”
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>COMPETITION</td>
            <td>A tactically delivered threat of doing business elsewhere.</td>
            <td>“You’re quite a bit higher than the competition.”</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>THE FLINCH</td>
            <td>
              A tactically delivered negative reaction to the other party’s
              position as a means to increase their satisf­action with the
              outcome.
            </td>
            <td>“Whoa, I must have misheard you. $70 per unit?!”</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>THE SQUEEZE</td>
            <td>
              A tactically planned statement that directly targets your
              opponent’s insecurity about their own pricing or position.
            </td>
            <td>“I like you, but I need you to do better than that.”</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>DEADLINE</td>
            <td>
              A time pressure that is tactically aimed to affect the choices the
              other party makes, resulting in a more favorable position for
              yourself.
            </td>
            <td>“I need your best offer by 5pm.”</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>PERSUASION</td>
            <td>
              Cause the other party to do something through reasoning or
              argument.
            </td>
            <td>
              “We need to evaluate this decision from a total cost of ownership
              standp­oint.”
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>FIRM POSITION</td>
            <td>
              Strate­gically deadlo­cking in order to test the other party’s
              position.
            </td>
            <td>
              “It sounds like we won’t be able to agree on terms. I appreciate
              your time.”
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>LIMITED or NO AUTHORITY</td>
            <td>
              Strate­gically displaying a lack of authority in a given
              negotiation in order to gain leverage.
            </td>
            <td>
              “I’ve been instructed not to do a penny more than $67 per unit on
              this SKU.”
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>SILENCE</td>
            <td>
              Strate­gically using silence as a means to increase as well as
              protect leverage.
            </td>
            <td>“[Cric­kets]”</td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>THE NIBBLE</td>
            <td>
              A small, seemingly insign­ificant conces­sion. Usually made at the
              very end of a negoti­ation.
            </td>
            <td>
              “Okay great, now just agree to split the marketing costs and I can
              sign off.”
            </td>
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
            <th>Mistake</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody className="text-2xs">
          <tr className="bg-base-100 border-2 border-neutral">
            <td>NOT BUILDING RELATIONSHIPS</td>
            <td className="max-w-2xl">
              <div>
                There may be times when you have to enter into negoti­ations
                without any unders­tanding of the other side’s positions. But
                wherever possible try to establish a relati­onship with the
                other party in advance; doing so will greatly increase your
                negoti­ating power. Even seemingly unimpo­rtant “small talk” can
                help to establish trust while giving you some insight into how
                to deal with the other person. Not knowing anything about your
                opponent in a negoti­ating situation is a major handicap.
              </div>
            </td>
          </tr>
          <tr className="bg-base-100 border-2 border-neutral">
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
          </tr>
          <tr>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
          </tr>
          <tr>
            <td>Marjy Ferencz</td>
            <td>Office Assistant I</td>
          </tr>
        </tbody>
      </table>
      // <table className="text-black text-xs bg-gray-300 border-collapse table">
      //   <thead>
      //     <tr>
      //       <th scope="col">Mistake</th>
      //       <th scope="col">Explanation</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>1. Not building relati­onships</td>
      //       <td>
      //         There may be times when you have to enter into negoti­ations
      //         without any unders­tanding of the other side’s positions. But
      //         wherever possible try to establish a relati­onship with the other
      //         party in advance; doing so will greatly increase your negoti­ating
      //         power. Even seemingly unimpo­rtant “small talk” can help to
      //         establish trust while giving you some insight into how to deal
      //         with the other person. Not knowing anything about your opponent in
      //         a negoti­ating situation is a major handicap.
      //       </td>
      //     </tr>
      //     <tr>
      //       <td>2. Talking too much</td>
      //       <td>
      //         In negoti­ating, silence carries a great deal of power. Most
      //         people are uncomf­ortable with silence and negoti­ating pros are
      //         well aware of that. Train yourself to get comfor­table with the
      //         awkwar­dness of silence and use it to your negoti­ating advantage.
      //         After a period of silence, the first person to speak will usually
      //         be at a disadv­antage. As one pro puts it, “He who talks the least
      //         learns the most.”
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
    );
  };
  const TableTabs = () => {
    return (
      <div>
        <Tab.Group as="div" className="bg-neutral">
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
              Contract Principles
            </Tab>
          </Tab.List>
          <Tab.Panels class=" h-96 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
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
              Privacy Commissioners
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-2">
            <Tab.Panel>
              <div className="grid grid-flow-col gap-3">
                <a
                  className="btn btn-primary text-2xs"
                  href="https://recherche.umontreal.ca/english/strategic-initiatives/montreal-declaration-for-a-responsible-ai/"
                >
                  Montreal Declaration
                </a>
                <a
                  className="btn btn-secondary text-2xs"
                  href="https://www.oecd.org/going-digital/ai/principles/"
                >
                  OECD Principles on AI
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-1 gap-4">
                <a
                  className="btn btn-primary"
                  href="https://www.iso.org/committee/6794475.html"
                >
                  ISO Standards
                </a>
                <a
                  className="btn btn-secondary text-2xs"
                  href="https://ciostrategycouncil.com/standards/"
                >
                  CIO Council Standards
                </a>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-flow-row grid-cols-6 grid-rows-3 gap-4">
                <a
                  className="btn btn-primary"
                  href="https://www.priv.gc.ca/en/F"
                >
                  CA
                </a>
                <a className="btn btn-secondary" href="https://www.ipc.on.ca/">
                  ON
                </a>
                <a className="btn btn-accent" href="https://www.oipc.ab.ca/">
                  AB
                </a>
                <a className="btn btn-info" href="https://www.oipc.bc.ca/">
                  BC
                </a>
                <a
                  className="btn btn-success"
                  href="https://www.cai.gouv.qc.ca/english/"
                >
                  QC
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://www.ombudsman.mb.ca/"
                >
                  MB
                </a>
                <a className="btn btn-accent" href="https://oipc.sk.ca/">
                  SK
                </a>
                <a className="btn btn-info" href="https://ombudnb.ca/site/">
                  NB
                </a>
                <a className="btn btn-primary" href="https://www.oipc.nl.ca/">
                  NL
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://www.assembly.pe.ca/offices/information-and-privacy-commissioner"
                >
                  PEI
                </a>
                <a
                  className="btn btn-accent"
                  href="https://oipc.novascotia.ca/"
                >
                  NS
                </a>
                <a className="btn btn-info" href="http://www.ombudsman.yk.ca/">
                  YT
                </a>
                <a className="btn btn-success" href="https://atipp-nt.ca/">
                  NWT
                </a>
                <a className="btn btn-info" href="https://atipp-nu.ca/">
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
        <div className="card shadow-sm bg-neutral text-neutral-content max-w-full">
          <figure>
            <iframe
              width="460"
              height="340"
              src="https://www.youtube.com/embed/S2-tiAjO2GM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
          <div className="card-body">
            <p>
              Have you taken our course? Follow the link for more information.
            </p>
            <div className="card-actions">
              <a
                href="https://osler-university.teachable.com/p/ai-contracting-for-startup-founders"
                className="btn btn-secondary"
              >
                More info
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
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 rounded-md hover:text-gray-500 focus:outline-none ">
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
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img src="/slide1.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img src="/slide2.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <img src="/slide3.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative w-full carousel-item">
          <img src="/slide4.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="relative w-full carousel-item">
          <img src="/slide5.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
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
          className="min-h-screen flex items-center justify-center card glass"
          id="static"
        >
          <div class="navbar text-neutral-content rounded-box min-w-full relative z-20">
            <div class="flex-1 px-2 mx-2">
              <span class="text-2xl font-bold">
                Interactive AI Negotiation Cheat Sheet
              </span>
            </div>
            <div class="hidden px-2 mx-2 navbar-center lg:flex">
              <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">About</a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-rows-6 space-y-5">
            <div className="row-span-3">
              <br />
              <Card
                title="General Contract Principles"
                text={tableDescription}
                content={TableTabs()}
              />
            </div>
            <div className="row-span-3">
              <Trailer />
            </div>
            <div className="row-span-2">
              <Card title="AI Slide Deck" content={<SlideDeck />} />
            </div>
            <div className="row-span-1">
              <div className="text-center text-lg font-bold">
                Talk to one of our experts:
              </div>
              <div className="flex justify-center">
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
            <div className="row-span-3">
              <Card
                title="Quick References"
                content={LinksTable()}
                isReference="true"
              />
            </div>
            <div className="row-span-3 col-span-2">
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
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
