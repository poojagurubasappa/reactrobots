import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Scroll} from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchField, fetchRobots } from '../actions';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.fetchRobots.robots,
        isPending: state.fetchRobots.isPending,
        error: state.fetchRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => dispatch(fetchRobots())
    }
};

class App extends Component {

    componentDidMount() {
        this.props.onFetchRobots();
    }
    
    render() {
        const filteredRobots = this.props.robots.filter(robots => robots.name.toLowerCase().includes(this.props.searchField));
        return this.props.isPending ? 
        <h1>Loading..</h1> : (
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