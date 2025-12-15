"use client";
import classes from './page.module.css'
import { useEffect } from 'react';

export default function Error({error}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className={classes.header}>
            <h1>Oops! Something went wrong.</h1>
            <p> Error details: {error.message}</p>
        </main>
    );
}