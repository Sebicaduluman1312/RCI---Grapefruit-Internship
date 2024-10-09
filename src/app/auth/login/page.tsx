"use client"
/// HELPERS
import { LoginProps } from '@/components/Login/interface';

/// COMPONENTS
import LoginPage from '@/components/Login';

export default function Login({searchParams}: LoginProps) {
    return (
        <>
            <LoginPage searchParams={searchParams}/>
        </>
    )
}