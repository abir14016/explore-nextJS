import { useRouter } from 'next/router';
import React from 'react';

const NewsDetailPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This detail of news : {router.query.newsId}</h1>
        </div>
    );
};

export default NewsDetailPage;