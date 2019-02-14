import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Page from './components/Page';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            page: null
        };
    }
    render() {
        return (
            <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
                <header class="bw-header" style={{flexGrow: 0}}>
                    <p style={{textAlign: 'center', fontSize: '48px'}}>Body Works</p>
                    <p style={{textAlign: 'center'}}>All about how the body works!</p>
                </header>
                <div className={"bw-body"}>
                {
                    this.state.page ?
                        <Page page={this.state.page} backToCategories={this.backToCategories} />
                        :
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                            <Button onClick={() => this.buttonClick("circulatory")} buttonTitle={"Circulatory System"} comingSoon={true}/>
                            <Button onClick={() => this.buttonClick("respiratory")} buttonTitle={"Respiratory System"} comingSoon={true}/>
                            <Button onClick={() => this.buttonClick("digestive")} buttonTitle={"Digestive System"} comingSoon={true}/>
                            <Button onClick={() => this.buttonClick("muscular")} buttonTitle={"Muscular System"}/>
                            <Button onClick={() => this.buttonClick("skeletal")} buttonTitle={"Skeletal System"} comingSoon={true}/>
                        </div>
                }
                </div>
            </div>
        );
    }

    buttonClick = (page) => {
        this.setState({page});
    };

    backToCategories = () => {
        this.setState({page: null});
    };
}

export default App;
