import React, {Component} from 'react';
import BasePage from './BasePage';
import Button from './Button';

const question1 = {
    q: "What is a muscle?",
    a: "Muscles are a special type of cell that can contract."
};
const question2 = {
    q: "What kinds of muscles are there?",
    a: "There are voluntary muscles which you can control (like in your " +
    "arms and legs), and involuntary muscles that you can't control (like " +
    "in your eyes or your stomach). You can also divide muscles into " +
    "skeletal, smooth, and cardiac muscles. Skeletal muscles are for " +
    "moving your body. Smooth muscles are in your stomach and blood " +
    "vessels. Cardiac muscles are in your heart. There are even smooth " +
    "muscles in your skin attached to each hair to make them stand up!"
};
const question3 = {
    q: "How do muscles work?",
    a: "Muscles work using special molecules called actin and myosin. " +
    "When the brain sends a signal to contract, the myosin filaments pull " +
    "on the actin filaments, causing the muscle to get shorter."
};
const question4 = {
    q: "How many muscles do you have?",
    a: "More than 600! Some major ones are the biceps, triceps, pectorals, " +
    "deltoids, abdominals, quadriceps, and gluteus maximus. Also, the " +
    "tongue is a majorly important muscle used for eating and talking."
};
const question5 = {
    q: "How do you get hiccups?",
    a: "Hiccups happen when the big muscle at the bottom of your ribcage " +
    "(the diaphragm) gets irritated. It suddenly pulls air into your lungs " +
    "and causes your vocal cords to snap shut, making that silly hiccup sound."
};
const question6 = {
    q: "Why do muscles get cramps?",
    a: "A cramp happens when a voluntary muscle contracts involuntarily. " +
    "A chemical imbalance (such as too much lactic acid) causes the muscle " +
    "to get stuck in a contracted state."
};
const question7 = {
    q: "Why should you stretch?",
    a: "Loosening the muscles and increasing blood flow may help limit " +
    "muscle injuries. It also feels really good!"
};
const question8 = {
    q: "What is the biggest muscle?",
    a: "The biggest muscle is the gluteus maximus, which is the main muscle " +
    "used for walking and standing upright. And it's also used for sitting on!"
};
const question9 = {
    q: "What is the smallest muscle?",
    a: "The smallest muscle is the stapedius, which is located inside the " +
    "ear and helps to support the smallest bone in the body, the stapes."
};
const question10 = {
    q: "Why do your muscles get sore ?",
    a: "Muscles get sore when they work harder than usual because of " +
    "microscopic damage to the muscles. Although it hurts, it usually " +
    "means the muscles are getting stronger."
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