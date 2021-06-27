import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Scroll} from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots: users})});
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.props.searchField));
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox onSearchChange={this.props.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);