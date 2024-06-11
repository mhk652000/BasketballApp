

import React from 'react';
import { Button } from '../../globalStyles';
import { Row, Col } from 'antd';
import './matches.css'; // Rename carousel.css to matches.css
import { Link } from 'react-router-dom'


// Stubbed data for NBA games with team images
const stubbedGames = [
    { 
        team1: 'Los Angeles Lakers', 
        team2: 'Golden State Warriors', 
        team1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
        team2Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png',
        date: 'April 5, 2024', 
        time: '19:00 PKT'
    },
    { 
        team1: 'Boston Celtics', 
        team2: 'Chicago Bulls', 
        team1Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png',
        team2Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
        date: 'April 6, 2024', 
        time: '20:00 PKT' 
    },
    { 
        team1: 'Houston Rockets', 
        team2: 'Los Angeles Clippers', 
        team1Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1200px-Houston_Rockets.svg.png',
        team2Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Los_Angeles_Clippers_%282015%29.svg/1200px-Los_Angeles_Clippers_%282015%29.svg.png',
        date: 'April 7, 2024', 
        time: '18:30 PKT' 
    },
    { 
        team1: 'Brooklyn Nets', 
        team2: 'Miami Heat', 
        team1Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/1200px-Brooklyn_Nets_newlogo.svg.png',
        team2Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png',
        date: 'April 8, 2024', 
        time: '19:30 PKT' 
    },
    { 
        team1: 'San Antonio Spurs', 
        team2: 'New York Knicks', 
        team1Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png',
        team2Image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/1200px-New_York_Knicks_logo.svg.png',
        date: 'April 9, 2024', 
        time: '17:00 PKT' 
    }
];

const clickHandler=()=>{

}
const Matches = () => {
    // Render individual game cards
    const renderGameCards = () => {
        return stubbedGames.map((game, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8} style={{backgroundColor:"#000000"}}>
                <div className="game-card">
                    <div className="team-info">
                        <div className="team-image">
                            <img src={game.team1Image} alt={game.team1} style={{width:"100px", height:"100px"}} />
                            <p>{game.team1}</p>
                        </div>
                        <div className="vs-icon">vs</div>
                        <div className="team-image">
                            <img src={game.team2Image} alt={game.team2} style={{width:"100px", height:"100px"}}/>
                            <p>{game.team2}</p>
                        </div>
                    </div>
                    <div className="game-details">
                        <p>Date: {game.date}</p>
                        <p>Time: {game.time}</p>
                        <Link to='/Products'>
                            <Button fontSmall primary className='btnMatch'>Watch Live</Button>
                        </Link>
                    </div>
                </div>
            </Col>
        ));
    };

    return (
        <div className="matches-container">
            <h2>Upcoming NBA Games</h2>
            <Row gutter={[16, 16]} justify="center" align="middle">{renderGameCards()}</Row>
        </div>
    );
};

export default Matches;
