import './App18.css'
function ResponsiveImage({ src, width, height }) {
    return (
        <div
            style={{
                width,
            }}
            className="responsive-image">
            <div style={{
                paddingBottom: (height / width * 100) + '%'
            }} />
            <img
                src={src}
                className="responsive-image__image" />
        </div>
    );
}

<ResponsiveImage
    src="https://lorempixel.com/1200/800/"
    width={1200}
    height={800} />