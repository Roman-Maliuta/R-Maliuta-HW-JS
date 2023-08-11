import React from 'react';
import { Route, Routes, Link,  Outlet } from "react-router-dom";
import { ContactsList } from './ContactsList.jsx';
import { AlbumsList} from "./AlbumsList.jsx";
import { PhotosList} from "./PhotosList.jsx";


export const App = () => {
  return (
    <>
      <Outlet/>
      <button className='btn-open'>
        <Link to="/ContactsList" className='link'>Open contacts list</Link>
      </button>
      <Routes>
         <Route path="/ContactsList" element={<ContactsList/>}></Route>
        <Route path="/ContactsList/:id" element={<AlbumsList />}>
          <Route path=":id" element={<PhotosList/>}></Route>
         </Route>
      </Routes>
    </>
  )
};

