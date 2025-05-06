import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function ImageSlider({ images }) {
    //Global context variables
    const {baseImgUrl} = useGlobalContext()

    // Sate variable
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider p-relative">
            <img
                src={`${baseImgUrl}/${images[current].url}`}
                alt={images[current].description || `Slide ${images[current].id}`}
                className="object-cover"
            />
            <button
                onClick={prevSlide}
            // className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                1
            </button>
            <button
                onClick={nextSlide}
            // className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                2
            </button>
        </div>
    );
};

export default ImageSlider;