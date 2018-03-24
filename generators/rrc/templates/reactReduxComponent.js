import React from 'react';
import { connect } from 'react-redux';
<% if (hasStyleSheet) { %>
import styles from './styles.scss';
<% } %>

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

@connect(mapStateToProps, mapDispatchToProps)
export default class <%= componentName %> extends React.Component {
    state = {}

    render(){
        return (
            <div className='<%= componentName %>Container'>

            </div>
        )
    }
}