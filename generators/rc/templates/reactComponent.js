import React from 'react';
<% if (hasStyleSheet) { %>
import styles from './styles.scss';
<% } %>

export default class <%= componentName %> extends React.Component{
    state = {}
    componentWillMount(){ }
    componentDidMount(){ }
    componentWillReceiveProps(nextProps){ }
    componentWillUnmount() { }
    render(){
        return (
            <div className='<%= componentName %>Container'>

            </div>
        )
    }
}