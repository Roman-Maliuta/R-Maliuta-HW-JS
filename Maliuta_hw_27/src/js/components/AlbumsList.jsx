import React, { Fragment, useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

export const AlbumsList = () => {
    const params = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.id}`)
        .then((response) => response.json())
            .then((json) => setAlbums(json))
        .catch(error => console.log(error));

    }, [])

    return (
        <>
            <Outlet/>
            <ul className="list" >
                {albums.map(album => (
                   <li key={`${ album.id }-${album.userId}`} className="list-item">
                        <p className="list-item-data"> Album number: {album.id}</p>
                        <p className="list-item-data">Title: {album.title}</p>
                    <button className='btn-open'>
                        <Link to={'' + album.id} className='link'>Photos</Link>
                    </button>                    
                    </li>
                ))
                }
            </ul>
        </>
    )
}
