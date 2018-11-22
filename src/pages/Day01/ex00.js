import React, {Component} from 'react';
import { connect } from 'react-redux';

import ex00 from './functions/ex00'
import ex01 from './functions/ex01'
import ex02 from './functions/ex02'
import ex03 from './functions/ex03'
import ex04 from './functions/ex04'
import ex05 from './functions/ex05'
import ex07 from './functions/ex07'
import ex08 from './functions/ex08'
import ex09 from "./functions/ex09";
import ex10 from "./functions/ex10";


import {withRouter} from "react-router-dom";
import UserIDActions from './../../reducers/userIDRedux'

//import ex02 from './functions/ex02'
class Day01Ex00 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Tonys-MBP:~ tonymack$ ',
            ex02: 'notActive',
            getNumber: false
        };
        document.title = 'Basics';
    }

    async componentDidMount() {
        await this.props.userIdRequest();
    }

    _processRequest = () => {
        const strArray = this.state.text.split('Tonys-MBP:~ tonymack$ ');
        const strStrip = strArray[strArray.length - 1].replace(/\s\s+/g, ' ');
        const exercise = strStrip.indexOf(' ') > -1 ?  strStrip.split(' ')[0] : strStrip;
        let args = '';
        if (strStrip.indexOf(' ') > -1) {
            args = strStrip.split(exercise + ' ')[1]
        }

        switch (exercise) {
            case 'clear':
                this.setState({
                    text: ''
                });
                break;
            case '':
            case ' ':
                break;
            case './ex00':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex00()
                    })
                });
                break;
            case './ex01':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex01()
                    })
                });
                break;
            case './ex02':
                this.setState(prevState => {
                    return ({
                        ex02: 'Active',
                    })
                });
                break;
            case './ex03':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex03(args)
                    })
                });
                break;
            case './ex04':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex04(args)
                    })
                });
                break;
            case './ex05':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex05(args)
                    })
                });
                break;
            case './ex06':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex04(ex05(args))
                    })
                });
                break;
            case './ex07':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex07(ex05(args))
                    })
                });
                break;
            case './ex08':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex08(args)
                    })
                });
                break;
            case './ex09':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex09(args)
                    })
                });
                break;
            case './ex10':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + ex10(args)
                    })
                });
                break;
            case './ex11':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + this.props.userID.data.message
                    })
                });
                break;
            default:
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n Command not found'
                    })

                })
        }
    };

    _onKeyPress = async (e) => {
        console.log(e.key);
        const strArray = this.state.text.split('Tonys-MBP:~ tonymack$ ');
        const word = strArray[strArray.length - 1].replace(/\s\s+/g, ' ');
        e.preventDefault();
        const char = e.key;
        if (char.length === 1) {
            this.setState(prevState => {
                return ({
                        text: prevState.text + char
                    }
                )
            })
        }
        if (e.key === 'Backspace' && word.length > 0) {
            this.setState(prevState => {
                return ({
                        text: prevState.text.substring(0, prevState.text.length - 1)
                    }
                )
            })
        }
        if (e.key === 'Enter') {
            if (this.state.ex02 === 'notActive') {
                await this._processRequest();
                if (this.state.ex02 === 'notActive') {
                    this.setState(prevState => {
                        return ({
                                text: prevState.text + '\nTonys-MBP:~ tonymack$ '
                            }
                        )
                    })
                }
            }
            if (this.state.ex02 === 'Active') {
                ex02(this._ex02Setstate, this.state.text);
            }
        }
    };

    _ex02Setstate = (text, active = '') => {
        this.setState(prevState => {
            return ({
                text: prevState.text + text,
                ex02: active ? active : prevState.ex02
            })

        })
    };

    render() {
        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <form onSubmit={this._handleSubmit}>
                        <textarea onKeyDown={this._onKeyPress} value={this.state.text} className={'col-md-12'}
                                  style={{background: 'black', color: 'white', height: '50vh'}}/>
                    </form>

                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    userID: state.userID,
});

const mapDispatchToProps = dispatch => ({
    userIdRequest: () => dispatch(UserIDActions.userIdRequest()),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Day01Ex00)
);