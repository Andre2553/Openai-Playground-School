import Head from "next/head";

export default function Summarize() {
  return (
    <>
      <Head>
        <title>Summarize</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl mx-auto p-20 text-center'>
        <h1 className='text-6xl text-gray-800 font-bold '>Summarise for Kids</h1>
        <h3 className="text-2xl mt-5 text-gray-600">Hard to explain? Sumarise it like you would do for a kid</h3>
        <form className="mt-9 bnpm run 
        bg-gray-800 shadow-lg rounded-2xl px-32 py-9 mb-4  w-3/4 ml-auto mr-auto " action="">
          <div className="mb-4 mt-4">
            <label className="block text-left text-gray-100  text-lg ml-2 mb-4" htmlFor="username">
              Your name
            </label>
            <input className="block  text-sm shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John" />
          </div>
          <div className="mb-4 mt-8">
            <label className="block text-left text-gray-100 text-lg ml-2 mb-4" htmlFor="username">
              Write about the topic you want to study
            </label>
            <ul className="text-left mb-4">
              <li> - Summarize this for a second-grade student: [Your Text]</li>

            </ul>
            <textarea className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  />
          </div>
          <button className="bg-[#6469ff] hover:bg-[#494dc0] text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8" type="button">
            Generate
          </button>
        </form>

      </main>
    </>
  )
}