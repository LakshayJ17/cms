import { Anvil } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    const auth = true
    const tempUser = {
        name : "Sam",
        username : "samcool"
    }
    return (
        <div className="w-full flex justify-between items-center px-8 sm:px-12 h-12 pb-5 border-b-gray border-b-1">
            <Link href="/" className="flex gap-2">
                <Anvil /> <span className="font-bold">BlogVerse</span>
            </Link>
            {auth ? (
                <UserModalComponent user={tempUser} />
            ) : (
                <Link href="/sign-in">Sign In</Link>
            )}
        </div>
    )
}

const UserModalComponent = ({ user }) => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            User
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href={`/profile/${user.username}`}>Go to Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}