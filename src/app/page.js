import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layers, Pencil, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex justify-center w-full h-[90vh] sm:h-[100vh] px-5">
        <div className="flex flex-col justify-center items-center gap-7 text-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ">Manage your content with ease</h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publish with Confidence
            </p>
          </div>
          <div className="flex gap-1">
            <Link href="/sign-in" variant={"default"} className="bg-gray-200 hover:bg-gray-400 px-4 text-black py-1 rounded-sm transition-all duration-200 delay-100">Try it Out !</Link>
            <Button variant={"link"} className="px-6">Learn more</Button>
          </div>
        </div>

      </section>

      <section className="flex justify-center items-center min-h-screen sm:min-h-[50vh] bg-gray-400/10 w-full px-5">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          <span className="flex flex-col items-center gap-3">
            <Icons.BlogCustomIcons className="w-13 h-13 text-white" />
            <h3 className="text-xl font-bold text-gray-100">Flexible Tools</h3>
            <p className="text-gray-400 text-center w-[70%]">Create and edit content with user friendly interface</p>
          </span>
          <span className="flex flex-col items-center gap-3">
            <Layers size={50} />
            <h3 className="text-xl font-bold text-gray-100">Intiutive Editor</h3>
            <p className="text-gray-400 text-center w-[70%]">Create and edit content with user friendly interface</p>
          </span>
          <span className="flex flex-col items-center gap-3">
            <Zap size={50} />
            <h3 className="text-xl font-bold text-gray-100">Blazing Fast</h3>
            <p className="text-gray-400 text-center w-[70%]">Create and edit content with user friendly interface</p>
          </span>
        </div>
      </section>


      <section className="h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center items-start">
        <div className="max-w-[50%] mx-auto space-y-3">
          <h4 className="font-bold text-2xl">
            Ready to Transform your Content Journey?
          </h4>
          <p className="text-sm text-gray-400">
            Join thousands of Content Creators like you in BlogVerse
          </p>
          <div className="flex flex-row gap-2">
            <Input className="bg-zinc-800 focus:outline-none rounded-sm px-2 py-[7px] text-sm text-gray-400" placeholder="Enter your email" />
            <Button className="cursor-pointer">Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
