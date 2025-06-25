import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex justify-center w-full h-[50vh] sm:h-[70vh]">
        <div className="flex flex-col justify-center items-center gap-7 text-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ">Manage your content with ease</h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Streamline your content workflow, publish with Confidence
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant={"default"} className="bg-gray-200 px-6">Try it Out !</Button>
            <Button variant={"outline"} className="px-6">Try it Out !</Button>
          </div>
        </div>

      </section>

      <section className="min-h-screen sm:min-h-[80vh] bg-gray-600/10 w-full">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <span className="max-w-1/3">
            <Pencil size={50} />
            <h3>Intiutive Editor</h3>
            <p>Create and edit content with user friendly interface</p>
          </span>
          <span className="max-w-1/3">
            <Pencil size={50} />
            <h3>Intiutive Editor</h3>
            <p>Create and edit content with user friendly interface</p>
          </span>
        </div>
      </section>


      <section>

      </section>
    </main>
  );
}
