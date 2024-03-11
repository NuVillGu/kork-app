import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

function renderThumbs(value) {
    return value.map((img, index) => (
        <div key={index}>
            <Image src={img} alt={`Thumbnail ${index + 1}`} width={54} height={75} />
        </div>
    ));
}

function CarouselImg({ value }) {
    return (
        <div>
            <Carousel
                showArrows={false}
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                renderThumbs={() => renderThumbs(value)} // Aquí pasamos value como argumento a renderThumbs
            >
                {value.map((val, index) => (
                    <div key={index}><Image src={val} alt={`Image ${index + 1}`} width={500} height={500} /></div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselImg;

