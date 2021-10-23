import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";

export default function Home() {
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  return (
    <div className="flex align-middle justify-center min-h-screen bg-gray-300">
      <Head>
        <title>Contract Negotiation Cheat Sheet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="">
        <div className="pt-5 pl-5">
          <Image
            src="/logo.png"
            alt="Contract Negotiation Cheat Sheet"
            width={180}
            height={50}
          />
        </div>
        <h1 className="text-5xl font-sans text-center">
          In a Box:
          <div className="text-red-700">
            AI Contract Negotiation Cheat Sheet
          </div>
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Card title="Content 1" text={dummyText} />
          <Card title="Content 2" text={dummyText} />
          <Card title="Content 3" text={dummyText} />
          <Card title="Content 4" text={dummyText} />
        </div>
        {/* <div className=" bg-gray-500 text-white shadow-lg rounded-md">
          <div className="p-5">
            <h2 className="text-2xl font-sans text-center">Static content</h2>
          </div>
        </div>
        <div className=" bg-gray-500 text-white shadow-lg rounded-md">
          <div className="p-5">
            <h2 className="text-2xl font-sans text-center">Static content</h2>
          </div>
        </div> */}
      </body>
    </div>
    // <div className="flex flex-col items-center justify-center min-h-0 py-2">
    //   <Head>
    //     <title>Contract Negotiation Cheat Sheet</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    //     <h1 className="text-6xl font-bold">
    //       In a Box:{" "}
    //       <div className="text-red-600" href="https://nextjs.org">
    //         AI Contract Negotiation Cheat Sheet
    //       </div>
    //     </h1>

    //     <p className="mt-3 text-2xl">
    //       Get started by editing{" "}
    //       <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
    //         pages/index.js
    //       </code>
    //     </p>

    //     <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    //       <a
    //         href="https://nextjs.org/docs"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Find in-depth information about Next.js features and API.
    //         </p>
    //       </a>

    //       <a
    //         href="https://nextjs.org/learn"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Learn &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Learn about Next.js in an interactive course with quizzes!
    //         </p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Examples &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Discover and deploy boilerplate example Next.js projects.
    //         </p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //       >
    //         <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
    //         <p className="mt-4 text-xl">
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className="flex items-center justify-center w-full h-24 border-t">
    //     <a
    //       className="flex items-center justify-center"
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
    //     </a>
    //   </footer>
    // </div>
  );
}
