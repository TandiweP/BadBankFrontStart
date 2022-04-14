import React from 'react'
// import moneyjar from '../images/moneyjar.jpg'
import Card from './Card'

export default function Home() {
    return (
        <Card
            id = "card-home"
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="Welcome to the Bank"
            text="Disregard the lack of security"
            body="I'm hoping to put an image here"
            // body={(<img src={moneyjar} className="img-fluid" alt="money sprout"/>)}
        />
    );
}

