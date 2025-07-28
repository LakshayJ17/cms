import { Anvil } from "lucide-react";
import Link from "next/link";
import {DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import SignOut from "./signout";


export default async function Navbar() {
    const session = await getAuthSession()
    const tempUser = {
        name : "Sam",
        username : "samcool"
    }
    return (
        <div className="w-full flex justify-between items-center px-8 sm:px-12 h-12 pb-5 border-b-gray border-b-1">
            <Link href="/" className="flex gap-2">
                <Anvil /> <span className="font-bold">BlogVerse</span>
            </Link>
            {session ? (
                <UserModalComponent user={session?.user} />
            ) : (
                <Link href="/sign-in">Sign In</Link>
            )}
        </div>
    )
}

const UserModalComponent = ({ user }) => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Image className="rounded-full border-2 border-[greenyellow]" src={user.image} width={40} height={40} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href={`/profile/${user.username}`}>Go to Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <SignOut />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}