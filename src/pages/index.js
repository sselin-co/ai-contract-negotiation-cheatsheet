import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import InteractiveCard from "../components/InteractiveCard";

export default function Home() {
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  const titles = [
    "Liability",
    "Ownership of Data",
    "Indemnification",
    "Privacy",
  ];
  const content = [
    "Content for Slider 1",
    "Content for Slider 2",
    "Content for Slider 3",
    "Content for Slider 4",
  ];
  const NegotiationTable = () => {
    return (
      <table className="text-black text-xs bg-gray-300">
        <thead>
          <tr>
            <th scope="col">Tactics</th>
            <th scope="col">Explanation</th>
            <th scope="col">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
          <tr>
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
          <tr>
            <td>COMPETITION</td>
            <td>A tactically delivered threat of doing business elsewhere.</td>
            <td>“You’re quite a bit higher than the competition.”</td>
          </tr>
          <tr>
            <td>THE FLINCH</td>
            <td>
              A tactically delivered negative reaction to the other party’s
              position as a means to increase their satisf­action with the
              outcome.
            </td>
            <td>“Whoa, I must have misheard you. $70 per unit?!”</td>
          </tr>
          <tr>
            <td>THE SQUEEZE</td>
            <td>
              A tactically planned statement that directly targets your
              opponent’s insecurity about their own pricing or position.
            </td>
            <td>“I like you, but I need you to do better than that.”</td>
          </tr>
          <tr>
            <td>DEADLINE</td>
            <td>
              A time pressure that is tactically aimed to affect the choices the
              other party makes, resulting in a more favorable position for
              yourself.
            </td>
            <td>“I need your best offer by 5pm.”</td>
          </tr>
          <tr>
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
          <tr>
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
          <tr>
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
          <tr>
            <td>SILENCE</td>
            <td>
              Strate­gically using silence as a means to increase as well as
              protect leverage.
            </td>
            <td>“[Cric­kets]”</td>
          </tr>
          <tr>
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
      <table className="text-black text-xs bg-gray-300 border-collapse table-fixed">
        <thead>
          <tr>
            <th scope="col">Mistake</th>
            <th scope="col">Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Not building relati­onships</td>
            <td>
              There may be times when you have to enter into negoti­ations
              without any unders­tanding of the other side’s positions. But
              wherever possible try to establish a relati­onship with the other
              party in advance; doing so will greatly increase your negoti­ating
              power. Even seemingly unimpo­rtant “small talk” can help to
              establish trust while giving you some insight into how to deal
              with the other person. Not knowing anything about your opponent in
              a negoti­ating situation is a major handicap.
            </td>
          </tr>
          <tr>
            <td>2. Talking too much</td>
            <td>
              In negoti­ating, silence carries a great deal of power. Most
              people are uncomf­ortable with silence and negoti­ating pros are
              well aware of that. Train yourself to get comfor­table with the
              awkwar­dness of silence and use it to your negoti­ating advantage.
              After a period of silence, the first person to speak will usually
              be at a disadv­antage. As one pro puts it, “He who talks the least
              learns the most.”
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  return (
    <div
      // data-theme="osler"
      className="min-h-screen"
    >
      <Head>
        <title>Contract Negotiation Cheat Sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* className="md:container md:mx-auto" */}
      <div className="md:container md:mx-auto">
        <div className="navbar shadow-lg bg-neutral text-neutral-content rounded-box sticky top-0 z-10">
          <div className="navbar-start">
            <div className="text-center md:text-left">
              <a
                href="https://osler.com"
                target="_blank"
                className="btn btn-ghost"
              >
                <h2 className="mb-5 text-4xl font-bold">Osler</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen">
          <div className="text-center hero-content mb-20">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-4xl sm:text-6xl font-bold text-neutral-content">
                AI Contract Negotiation Cheat Sheet
              </h1>
              <p className="text-lg sm:text-xl font-bold mb-5">
                Your guide to the contract negotiation process.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        {/* <h1 className="text-5xl text-neutral font-sans text-center">
          In a Box:
          <h1 className="text-primary font-medium">
            AI Contract Negotiation Cheat Sheet
          </h1>
        </h1> */}
        {/* <div className="flex">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Card
              title="General Contract Principles"
              text={dummyText}
              content={PrinciplesTable()}
            />
            <Card
              title="Negotiation Tactics"
              text={dummyText}
              content={NegotiationTable()}
            />
            <Card title="Negotiation Mistakes" text={dummyText} />
            <Card title="AI Concepts" text={dummyText} />
          </div>
          <div className="divider divider-vertical m-8 "></div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <InteractiveCard title={titles} text={content} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
