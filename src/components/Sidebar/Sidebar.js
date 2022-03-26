import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h3>Selected Items</h3>
            {props.data.map((item) => (
                <div className="sItem">
                    <p>{item.name}</p>
                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
