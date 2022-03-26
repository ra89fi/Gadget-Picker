import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ data, handleRemoveFromCart, chooseRandom, removeAll }) => {
    return (
        <div className="sidebar">
            <h3>Selected Gadgets</h3>
            {data.map((item) => (
                <div className="sItem" key={item.id}>
                    <p>{item.name}</p>
                    <FontAwesomeIcon
                        onClick={() => handleRemoveFromCart(item.id)}
                        icon={faRemove}
                    ></FontAwesomeIcon>
                </div>
            ))}
            <br />
            <p>
                <button onClick={() => chooseRandom()}>
                    Choose One For Me
                </button>
            </p>
            <p>
                <button onClick={removeAll}>Choose Again</button>
            </p>
        </div>
    );
};

export default Sidebar;
