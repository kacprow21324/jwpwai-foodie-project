"use client";
import { useEffect } from 'react';
import './../globals.css'

export default function Error({error}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="error">
            <h1>Oops! Something went wrong.</h1>
            <p> Error details: {error.message}</p>
        </main>
    );
}