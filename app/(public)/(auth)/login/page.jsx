'use client'

import React, { useState } from 'react';
import { login } from "../supabaseActions";
import Section from "@/components/section/Section";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";
import Button from "@/components/button/Button";
import { Label, TextInput } from "flowbite-react";
import Heading from "@/components/heading/Heading";
import Link from "next/link";


const LoginPage = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(e.target);

        try {
            const response = await login(null, formData);

            if (response?.error) {
                setError(response.error);
            }


        } catch (err) {
            console.error("Error:", err);
            if (err) {
                setError(err.message);
            }
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Section className="max-w-md flex flex-col justify-center items-center">
            <Heading level="h4" color="secondary">
                Log in
            </Heading>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-md w-full mt-8"
            >
                <div className="w-full flex flex-col">
                    <Label htmlFor="email" value="E-mail" />
                    <TextInput name="email" id="email" required className="text-sm" />
                </div>
                <div className="w-full flex flex-col">
                    <Label htmlFor="password" value="Password" />
                    <TextInput
                        type="password"
                        name="password"
                        id="password"
                        required
                        className="text-sm"
                    />
                </div>
                <div className="w-full flex flex-col">
                    <Button type="submit" size="lg" disabled={isPending}>
                        {isPending ? <LoadingSpinner /> : 'Log in'}
                    </Button>
                </div>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                <div className="w-full">
                    <span className="text-tertiary text-xs">
                        <Link href="/signup" className={'text-primary dark:text-orange-600 hover:underline'}>Sign up</Link> if you don't have an account
                    </span>
                </div>
            </form>
        </Section>
    );
};

export default LoginPage;
