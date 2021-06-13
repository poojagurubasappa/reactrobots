import React, {Component} from 'react';

export default class SearchBox extends Component {
    render() {
        return (
            <input className='pa3 ba b--green bg-lightest-blue'
                type='text' 
                placeholder='Search Robots'
                onChange={this.props.onSearchChange}
            />
        );
    }
}