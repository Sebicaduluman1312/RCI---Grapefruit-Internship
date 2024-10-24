import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"

import axios from "@/lib/axios";

export const authOptions: NextAuthOptions = {
 
    providers: [
        CredentialsProvider({
            name: "Credentials",
    
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const {username, password} = credentials as any;

                try{
                    const res = await axios.post('/auth/login',{
                        username,
                        password,
                        expiresInMins: 5
                    })

                    if(res.data)
                    {
                        console.log('Succes log in');
                        return {name: res.data.firstName, id: res.data.id, access: res.data.accessToken, refresh: res.data.refreshToken}
                    }
                    else
                        return null;

                } catch (error) {
                    console.error("Authentication error: ", error);
                    return null;
                }
            }
        })
    ],

    callbacks:{ 
        async signIn({user}){
            if(user) {
                return true;
            } else {
                return false;
            }
        },
        async jwt({token, user, account}){
            return({...token, ...user});
        },
        async session({session, token, user}){
            session.user = token;

            return session;
        },
    },

    session: {
        strategy: 'jwt'
    },

    pages:{
        signIn: "/auth/login"
    }

}

export default NextAuth(authOptions);