import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'

const App = () => {
    const personA = {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        height: 178,
        birth: Date('1992-07-14'),
        picture: 'https://randomuser.me/api/portraits/men/44.jpg'
    };
    const personB = {
        firstName: 'Obrien',
        lastName: 'Delores',
        gender: 'Female',
        height: 172,
        birth: Date('1988-05-11'),
        picture: 'https://randomuser.me/api/portraits/women/44.jpg'
    };

    return (
        <div>
            <h2>IdCard</h2>
            <IdCard data={personA} />
            <IdCard data={personB} />
            <h2>Greetings</h2>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">Ali</Greetings>
            <h2>Random</h2>
            <Random min={1} max={6} />
            <Random min={1} max={100} />
            <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h2>LikeButton</h2>

        <LikeButton />
        <br/>
        <LikeButton />
        <h2>Clickable picture</h2>

        <ClickablePicture />
        </div>
    );
};

export default App;
