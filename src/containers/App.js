import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Scroll} from '../components/Scroll';

export default function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => setRobots(users));
    }, []);
    
    
        const filteredRobots = robots.filter(robots => robots.name.toLowerCase().includes(searchField));
        
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox onSearchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}