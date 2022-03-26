import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h3>Selected Items</h3>
            {props.data.map((item) => (
                <div className="sItem" key={item.id}>
                    <p>{item.name}</p>
                    <FontAwesomeIcon
                        onClick={() => props.handleRemoveFromCart(item.id)}
                        icon={faRemove}
                    ></FontAwesomeIcon>
                </div>
            ))}
            <br />
            <p>
                <button onClick={() => props.chooseRandom()}>
                    Choose One For Me
                </button>
            </p>
            <p>
                <button>Choose One For Me</button>
            </p>
        </div>
    );
};

export default Sidebar;
