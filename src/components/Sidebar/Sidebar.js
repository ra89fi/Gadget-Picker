import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return <div className="sidebar">{props.data.length}</div>;
};

export default Sidebar;
