'use client'

import React, { useState } from 'react';
import { signup } from "../supabaseActions";
import Section from "@/components/section/Section";
import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";
import Button from "@/components/button/Button";
import { Label, TextInput } from "flowbite-react";
import Heading from "@/components/heading/Heading";
import Link from "next/link";

const SignUpPage = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(e.target);

        try {
            const response = await signup(null, formData);

            if (response?.error) {
                setError(response.error);
            } else {
                console.log("Registration successful");
                setMessage('Check your email address to continue. (check also in your spam folder)');
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error has occurred, try again later.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Section className="max-w-md flex flex-col justify-center items-center">
            <Heading level="h4" color="secondary">
                Sign Up
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
                        {isPending ? <LoadingSpinner /> : 'Sign Up'}
                    </Button>
                </div>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                {message && <div className="text-green-500 text-sm mt-2">{message}</div>}
                <div className="w-full">
                    <span className="text-tertiary text-xs">
                        <Link href="/login" className={'text-primary dark:text-orange-600 hover:underline'}>Log in</Link> if you already have an account
                    </span>
                </div>
            </form>
        </Section>
    );
};

export default SignUpPage;
