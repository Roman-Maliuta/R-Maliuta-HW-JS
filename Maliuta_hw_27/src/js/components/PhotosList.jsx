import React, { Fragment, useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";


export const PhotosList = () => {
    const params = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
        .then((response) => response.json())
            .then((json) => setPhotos(json))
        .catch(error => console.log(error));

    }, [params.id])

        return (
        <ul className="list" >
            {photos.map(photo => (
                   <li key={`${photo.id}-${photo.albumId}`} className="list-item">
                        <img src={`${photo.url}`} alt="#" />
                        <p className="list-item-data">Album number: {photo.albumId}</p>
                        <p className="list-item-data"> Photo number: {photo.id}</p>
                        <p className="list-item-data">Title: {photo.title}</p>
                        <p className="list-item-data">Album number: {photo.title}</p>
                    </li>
                ))
            }
        </ul>
    )
}