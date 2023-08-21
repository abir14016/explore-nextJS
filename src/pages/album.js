import Image from 'next/image';
import React from 'react';
import NextImage from "../assets/images/next-image.jpg"

const Album = () => {
    return (
        <div>
            <h1>This is using default image tag</h1>
            <img src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg" alt="nextjs-image" width="500" />

            <h1>this is using next js Image tag</h1>
            <Image
                src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
                alt='nextjs-image'
                height={500}
                width={500}
                layout='responsive'
            />

            <h1>this is using next js Image tag using local image</h1>
            <Image
                src={NextImage}
                alt='nextjs-image'
                height={500}
                width={500}
                layout='responsive'
            />
        </div>
    );
};

export default Album;