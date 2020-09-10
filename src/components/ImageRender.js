import React from 'react';
import ImageItem from './ImageItem';

const ImageRender = props => {
    const images = props.images.map(({ alt_description, description, urls, id }) => {
        return <ImageItem url={urls[props.size]} alt={alt_description} key={id} description={description} style={styles} />;
    });

    return (
        <div className="image-render" >
            {images}
        </div>
    )
}

const styles = {
    small: {

    },
    regular: {

    },
    large: {

    }
}

export default ImageRender;