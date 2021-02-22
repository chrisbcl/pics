import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import classes from './ImageList.module.css';

export interface Image {
    id: string;
    description: string;
    url: string;
}

interface ImageListProps {
    images: Image[];
    rowHeight?: number;
}

declare module 'csstype' {
    interface Properties {
        '--rows-height'?: string;
    }
}

const ImageList = ({ images, rowHeight = 10 }: ImageListProps) => {
    return (
        <div className={classes.ImageList} style={{ '--rows-height': `${rowHeight}px` }}>
            {images.map(({ id, url, description }) => (
                <ImageCard key={id} url={url} description={description} rowHeight={rowHeight} />
            ))}
        </div>
    );
};

export default ImageList;
