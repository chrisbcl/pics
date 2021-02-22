import React, { useState } from 'react';
import unsplash, { UnsplashImage } from '../../api/unsplash';
import ImageList, { Image } from '../ImageList/ImageList';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onSearchSubmit = async (input: string) => {
        // make api request
        try {
            const { data } = await unsplash.get('search/photos', {
                params: {
                    query: input
                }
            });
            const unsplashImages: UnsplashImage[] = data.results;
            setImages(
                unsplashImages.map(({ urls, alt_description, id }) => ({
                    url: urls.regular,
                    description: alt_description,
                    id
                }))
            );
        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            {errorMessage ? <p style={{ color: 'red' }}>{errorMessage}</p> : null}
            <ImageList images={images} />
        </div>
    );
};

export default App;
