import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return (
            <div onClick={this.props.comingSoon ? null : this.props.onClick} style={{
                border: '4px solid black',
                width: '150px',
                height: '150px',
                borderRadius: '100%',
                position: 'relative',
                backgroundColor: '#1cc71b',
                cursor: this.props.comingSoon ? 'default' : 'pointer',
                opacity: this.props.comingSoon ? '0.55' : '1'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    {this.props.buttonTitle}
                </div>
                {
                    this.props.comingSoon ?
                        <div style={{position: 'absolute', bottom: '-30px', width: '100%', textAlign: 'center', fontStyle: 'italic', fontSize: '16px'}}>
                            Coming soon...
                        </div>
                        : null
                }
            </div>
        );
    }
}

Button.propTypes = {
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func,
    comingSoon: PropTypes.bool
};

export default Button;