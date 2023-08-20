import { useRouter } from 'next/router';
import React from 'react';

const ProducDetailsPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>This is dynamic page of product: {router.query.productId}</h1>
        </div>
    );
};

export default ProducDetailsPage;