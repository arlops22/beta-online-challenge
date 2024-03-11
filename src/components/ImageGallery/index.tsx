import { useState } from 'react';
import Image from 'next/image';

interface IProps {
    images: string[]
}

const ImageGallery = ({ images }: IProps) => {
    const [active, setActive] = useState(images[0]);

    return (
        <div className="grid gap-4">
            <div>
                <Image
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    alt="active-image"
                    width={500}
                    height={500}
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        onClick={() => setActive(image)}
                        className='border-2 rounded-lg hover:border-pink-500 transition-all cursor-pointer'
                    >
                        <Image
                            src={image}
                            className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
                            alt="gallery-image"
                            width={80}
                            height={80}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery