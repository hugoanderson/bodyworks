import React, {Component} from 'react';
import BasePage from './BasePage';
import Button from './Button';

const question1 = {
    q: "What is a muscle?",
    a: ""
};
const question2 = {
    q: "What kinds are there?",
    a: ""
};
const question3 = {
    q: "How do they work?",
    a: ""
};
const question4 = {
    q: "How many do you have?",
    a: ""
};
const question5 = {
    q: "How do you get hiccups?",
    a: ""
};
const question6 = {
    q: "Why do muscles get cramps?",
    a: ""
};
const question7 = {
    q: "Why do you need to stretch?",
    a: ""
};
const question8 = {
    q: "What is the biggest muscle?",
    a: ""
};
const question9 = {
    q: "What is the smallest muscle?",
    a: ""
};
const question10 = {
    q: "Why do your muscles get sore ?",
    a: ""
};

class MuscularPage extends BasePage {

    constructor() {
        super();
        this.state = {
            question: null
        };
    }

    getQuestions = () => {
        return <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', margin: '25px 0'}}>
                <Button buttonTitle={question1.q} onClick={() => this.onClick(question1)} />
                <Button buttonTitle={question2.q} onClick={() => this.onClick(question2)} />
                <Button buttonTitle={question3.q} onClick={() => this.onClick(question3)} />
                <Button buttonTitle={question4.q} onClick={() => this.onClick(question4)} />
                <Button buttonTitle={question5.q} onClick={() => this.onClick(question5)} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', margin: '25px 0'}}>
                <Button buttonTitle={question6.q} onClick={() => this.onClick(question6)} />
                <Button buttonTitle={question7.q} onClick={() => this.onClick(question7)} />
                <Button buttonTitle={question8.q} onClick={() => this.onClick(question8)} />
                <Button buttonTitle={question9.q} onClick={() => this.onClick(question9)} />
                <Button buttonTitle={question10.q} onClick={() => this.onClick(question10)} />
            </div>
        </div>
    };

    onClick = (question) => {
        this.setState({question});
    }
}

export default MuscularPage;