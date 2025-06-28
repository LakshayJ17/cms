import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {prisma} from ""

 
export const authOptions = {
    adapter : PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: "",
            clientSecret: 
        })
    ]
}