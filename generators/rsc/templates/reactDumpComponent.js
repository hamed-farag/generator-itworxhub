import React from 'react';
<% if(hasStyleSheet){ %>
import styles from './styles.scss';
<% } %>

export default function ({ children }) {
    return (
        <div className='<%= componentName %>Container'>

        </div>
    )
}