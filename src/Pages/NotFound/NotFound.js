
import React from 'react';
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const NotFound = () => {
    return (
        <div>
            <h2>This is not found</h2>
            <Icon color="primary">add_circle</Icon>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faGoogle} />
        </div>
    );
};

export default NotFound;