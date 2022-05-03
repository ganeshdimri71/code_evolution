import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './componentsEleven/galary/gallerySlice'
import './gallery.css';


const App8 = () => {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.gallery.photos)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    console.log(photos);
    return (
        <div className='App'>
            <h1>PHOTOS GALLERY</h1>
            <p>This is photos gallery using toolkit and redux thunk</p>
            <hr />
            <div className="gallery">
                {
                    photos.map(photo =>
                        <img
                            key={photo.id}
                            alt={photo.author}
                            src={photo.download_url}
                            width="400"
                            height="400"
                        />
                        )
                }
            </div>
            <button>VIEW MORE</button>
        </div>
    )
}

export default App8