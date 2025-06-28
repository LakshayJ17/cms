import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Anvil } from "lucide-react";

export default function SignIn() {
    return <section className="w-full flex h-screen justify-center items-center">
        <div className="w-full sm:w-1/2 md:w-1/3 mx-4 p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
            <Anvil className="size-16 text-gray-300" />
            <p className="text-center text-sm text-gray-200">Welcome, by continuing with BlogVerse sign in, you're good to lead</p>
            <Button><Icons.GoogleLogo className="size-8" />Sign In</Button>
        </div>
    </section>


}