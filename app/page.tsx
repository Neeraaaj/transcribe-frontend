import Image from "next/image";
import mic from '../public/mic.png'
import About from "@/components/About";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24 
    bg-slate-900">
    {/* // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white bg-opacity-30" > */}
      <h1 className="text-5xl w-full lg:text-[7rem] text-center scroll-mt-10 text-white font-extrabold font-sans mt-20">TRANSCRIBE-EASY</h1>
      <p className="text-2xl lg:text-[4rem] text-white font-light font-sans absolute mt-[16rem]" >Transforming Speech into Text!</p>
      <a href="https://transcripter-audio-to-text.streamlit.app/" className="absolute mt-[20rem]" target="_blank">
        <button className="text-sm font-medium w-[10rem] text-black dark:text-white px-4 py-2 rounded-full bg-black">
              <span className="text-white font-bold">Transcribe Audio</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </a>
      <Image width={300} height={200} alt="mic" src={mic} className="absolute mt-[25rem] bg-white w-[25rem] lg:w-[35rem] rounded-[4rem] mix-blend-lighten lg:rounded-[10rem] "/>
      {/* <video className="absolute mt-[20rem] bg-white w-[50rem] rounded-[3rem]" loop muted autoPlay>
        <source src="https://cdn.dribbble.com/userupload/4534176/file/original-2b2df3790f360d9dc62f543c66436a04.mp4"/>
      </video> */}
    </main>
  );
}
