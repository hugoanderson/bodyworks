import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

class BasePage extends Component {
    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative'}}>
                <div style={{zIndex: 5, flexGrow: 0, textAlign: 'left', padding: '8px 0 0 28px'}}>
                    <span style={{cursor: 'pointer'}} onClick={this.props.backToCategories}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft}/> Back to Categories
                    </span>
                </div>
                <div style={{zIndex: 5, width: '100%', flexGrow: 1, justifyContent: 'center', display: 'flex'}}>
                    { this.state.question ?
                        <div style={{
                            zIndex: 10,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundColor: "black",
                            opacity: '0.4'}} onClick={this.closeQandA} />
                        : null
                    }
                    {
                        this.state.question ?
                            this.getQandA()
                            : null
                    }
                    { this.getQuestions() }

                </div>
            </div>
        );
    }

    getQandA = () => {
        return <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            alignItems: 'center'
        }}>
            <div style={{
                width: '80%',
                height: '80%',
                border: '4px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                backgroundColor: '#1cc71b',
                position: 'absolute',
                zIndex: 15,
                pointerEvents: 'all'
            }}>
                <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer'
                }} onClick={this.closeQandA}>
                    Close <FontAwesomeIcon icon={faTimes}/>
                </span>
                <div>
                    Question: {this.state.question.q}
                </div>
                <div>
                    Answer: {this.state.question.a}
                </div>
            </div>
        </div>;
    };

    closeQandA = () => {
        this.setState({question: null});
    }
}

BasePage.propTypes = {
    backToCategories: PropTypes.func
};

export default BasePage;