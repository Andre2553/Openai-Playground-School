import Head from "next/head";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { CreateCompletionResponse } from "openai";

const StudyNotesFormSchema = z.object({
  name: z.string().min(1, "* Type your name").max(100),
  topic: z.string().min(1, "* Write about the topic that you would like to learn").max(250, "* Max length is 250 characters"),
})

type FormData = z.input<typeof StudyNotesFormSchema>;

export default function StudyNotes() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: zodResolver(StudyNotesFormSchema),
  })

  const [response, SetResponse] = useState("");

  async function handleSendtoCommunity(data: any) {
    const { name, topic } = data as FormData;
    try {
      const response = await axios.post("/api/post-data", {
        name,
        topic,
      });
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }
  
  async function handleOnSubmitForm(data: any) {
    const { topic } = data as FormData;
    try {

      const response = await axios.post("/api/create-study-notes", {
        prompt: topic,
      });
      console.log(response);
      const data: CreateCompletionResponse = response.data;
      if (data.choices[0].text) {
        SetResponse(data.choices[0].text);
      } else {
        SetResponse("Sorry, we couldn't generate your study notes. Please try again.")
      }

    } catch (error) {
      console.log(error);

      SetResponse("Sorry, we couldn't generate your study notes. Please try again.")

    }

  }

  return (
    <>
      <Head>
        <title>Study Notes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl mx-auto p-20 text-center'>
        <h1 className='text-5xl text-gray-800 font-bold '>Study Notes</h1>
        <h3 className="text-2xl mt-5 text-gray-600">Generate study notes to Excel in your studies</h3>
        <section className="mt-9 
        bg-gray-800 shadow-lg rounded-2xl  py-9 mb-4  w-3/4 ml-auto mr-auto ">

          <form className="px-32" onSubmit={handleSubmit(handleOnSubmitForm)}>
            <div className="mb-4 mt-4">
              <label className="block text-left text-gray-100  text-lg ml-2 mb-4" htmlFor="username">
                Your name
              </label>
              <input className="block  text-sm shadow appearance-none border rounded w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="John"  {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm text-left mt-3">{errors!.name!.message + ""}</p>}
            </div>
            <div className="mb-4 mt-8">
              <label className="block text-left text-gray-100 text-lg ml-2 mb-4" htmlFor="prompt">
                Write about the topic you want to study
              </label>
              <ul className="text-left mb-4">
                <li> - What are 5 key points I should know when studying Ancient Rome?</li>
                <li> - What are the main points I should know when studying Algebra?</li>
              </ul>
              <input className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prompt" type="text" {...register("topic")} />
              {errors.topic && <p className="text-red-500 text-sm text-left mt-3"> {errors!.topic!.message + ""}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-[#6469ff] hover:bg-[#494dc0] text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8" >
              Generate
            </button>
          </form>
          {response && (
            <>
              <div className="bg-gray-900 py-3 px-4 mt-8 rounded-2xl w-4/5 mx-auto">

                <p className="text-left text-gray-100 text-lg whitespace-pre-wrap">{response}</p>
                <button onClick={handleSendtoCommunity} className="bg-[#6469ff] hover:bg-[#494dc0] text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8">Send the results to the Community</button>
              </div>
            </>
          )}

        </section>
      </main>
    </>
  )
}