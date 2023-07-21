import React from 'react';

export const Header = () => {
    return (
        <header className="header">
         <div className="container">
            <ul className="nav-list">
                <li className="nav-item">Catalog</li>
                <li className="nav-item">New</li>
                <li className="nav-item">Gifts</li>
                <li className="nav-item">Sales</li>
                <li className="nav-item">Recommendations</li>
                <li className="nav-item">Contacts</li>
            </ul>
         </div>
        </header>
    );
};