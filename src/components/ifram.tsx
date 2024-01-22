import React from 'react';
interface IMyIframeComponent {
    title: string,
    width: number,
    height: number,
    src: string, }
const MyIframeComponent = ({ title, width, height, src }: IMyIframeComponent) => {
    return (
        <div>
            <h1>{title}</h1>
            <iframe
                title={title}
                width={width}
                height={height}
                src={src}
                allowFullScreen
            />
        </div>
    );
};

export default MyIframeComponent;
