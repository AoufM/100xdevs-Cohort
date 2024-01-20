import React, { useState } from 'react';
import BirthdayCard from './BirthdayCard';

const BirthdayWisher = () => {
    const [name, setName] = useState('');
    const [isDoneClicked, setIsDoneClicked] = useState(false);

    const handleDoneClick = () => {
        setIsDoneClicked(true);
    };

    return (
        <>
        <div className="background">
            <div className="name-input-container">
                <h2>Enter Your Name</h2>
                <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button onClick={handleDoneClick}>Done</button>
            </div>

        </div>
            {isDoneClicked && (
                <div className="birthday-cards">
                    <BirthdayCard
                        name={name}
                        message="Wishing you a very happy birthday!"
                        image="https://img.freepik.com/free-vector/happy-birthday-lettering-with-golden-letters_52683-35047.jpg"
                    />
                    <BirthdayCard
                        name={name}
                        message="Hope your birthday is as amazing as you are!"
                        image="https://img.freepik.com/free-vector/happy-birthday-lettering-with-golden-letters_52683-35047.jpg"
                    />
                </div>
            )}
    </>);
};

export default BirthdayWisher;
