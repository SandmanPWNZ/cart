import React from 'react';

import './SkeletonLoader.scss'

const SkeletonLoader = () => {
    return (
        <div className={'item'}>
            <div className={'img'}></div>
            <div className={'content'}>
                <p></p>
                <p></p>
            </div>
            <div className={'control'}>

            </div>
        </div>
    );
};

export default SkeletonLoader;
