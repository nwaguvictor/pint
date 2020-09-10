import React from 'react';

const ImageItem = props => {
    return (
        <a href={props.url} className="image-item" target="_blank" rel="noopener noreferrer">
            <img
                src={ props.url }
                alt={ props.alt_description }
                style={{ width: '100%' }}
            />
        </a>
    )
}

export default ImageItem;