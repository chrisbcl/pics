import React, { useEffect, useRef, useState } from 'react';
import classes from './ImageCard.module.css';

interface ImageCardProps {
    description: string;
    url: string;
    rowHeight: number;
}

declare module 'csstype' {
    interface Properties {
        '--span-number'?: number;
    }
}

const ImageCard = ({ description, url, rowHeight }: ImageCardProps) => {
    const [spans, setSpans] = useState(1);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        function calculateSpanNumber() {
            if (imgRef.current) {
                const height = imgRef.current.clientHeight;
                const heightToSpans = Math.ceil(height / rowHeight + 1);
                setSpans(heightToSpans);
            }
        }

        imgRef.current?.addEventListener('load', calculateSpanNumber);
        window.addEventListener('resize', calculateSpanNumber);

        return () => window.removeEventListener('resize', calculateSpanNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.ImageCard} style={{ '--span-number': spans }}>
            <img ref={imgRef} src={url} alt={description} />
        </div>
    );
};

export default ImageCard;
