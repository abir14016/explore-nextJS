import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 5000)
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="error-image" width="100%" height="100%" />
        </div>
    );
};

export default ErrorPage;