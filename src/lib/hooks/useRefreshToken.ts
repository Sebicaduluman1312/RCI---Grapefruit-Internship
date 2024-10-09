"use client";

import { useSession, UseSessionOptions } from "next-auth/react";
import axios from "../axios";

export const useRefreshToken = () => {
    const {data: session} = useSession();

    const refreshToken = async () => {
        console.log('urmeaza sa se faca refresh');

        const res = await axios.post('/auth/refresh', {
            refreshToken: session?.user.refresh
        })

        console.log('s-a facut refresh la token');

        if (session)
            session.user.access = res.data.accessToken;
    }

    return refreshToken;

}