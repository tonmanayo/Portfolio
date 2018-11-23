import React, {Component} from 'react';
import {connect} from 'react-redux';
import Webcam from 'react-webcam'

import hello from './functions/hello'
import xxx from './functions/xxx'
import parity from './functions/parity'
import split from './functions/split'
import param from './functions/params'
import strClean from './functions/strClean'
import rostring from './functions/rostring'
import firstCleanArg from './functions/firstCleanArg'
import epoch from "./functions/epoch";
import smartReplace from "./functions/smartReplace";


import {withRouter} from "react-router-dom";
import UserIDActions from './../../reducers/userIDRedux'

//import ex02 from './functions/ex02'
class Day01Ex00 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Tonys-MBP:~ tonymack$ ',
            ex02: 'notActive',
            getNumber: false,
            cam: false
        };
        document.title = 'Basics';
    }

    async componentDidMount() {
        await this.props.userIdRequest();
    }

    _processRequest = () => {
        const strArray = this.state.text.split('Tonys-MBP:~ tonymack$ ');
        const strStrip = strArray[strArray.length - 1].replace(/\s\s+/g, ' ');
        const exercise = strStrip.indexOf(' ') > -1 ? strStrip.split(' ')[0] : strStrip;
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
            case './hello':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + hello(args)
                    })
                });
                break;
            case './xxx':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + xxx(args)
                    })
                });
                break;
            case './parity':
                if (args === '-h') {
                    this.setState(prevState => {
                        return ({
                            text: prevState.text + '\n' + parity(() => {
                            }, args)
                        })
                    });
                    return
                }
                this.setState(prevState => {
                    return ({
                        ex02: 'Active',
                    })
                });
                break;
            case './split':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + split(args)
                    })
                });
                break;
            case './param':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + param(args)
                    })
                });
                break;
            case './strClean':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + strClean(args)
                    })
                });
                break;
            case './ssap':
                if (args === '-h') {
                    this.setState(prevState => {
                        return ({
                            text: prevState.text + '\n' + ' ----------- Help Guide --------------------------------- \n' +
                                '|    Execute: ./ssap ...args                                          |\n' +
                                '|    Expected Result: split and sorted arguments      |\n' +
                                ' --------------------------------------------------------- '
                        })
                    });
                    return
                }
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + param(strClean(args))
                    })
                });
                break;
            case './rostring':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + rostring(strClean(args))
                    })
                });
                break;
            case './firstCleanArg':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + firstCleanArg(args)
                    })
                });
                break;
            case './epoch':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + epoch(args)
                    })
                });
                break;
            case './smartReplace':
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + smartReplace(args)
                    })
                });
                break;
            case './who':
                if (args === '-h') {
                    this.setState(prevState => {
                        return ({
                            text: prevState.text + '\n' + ' ----------- Help Guide --------------------------------- \n' +
                                '|    Execute: ./who                                                      |\n' +
                                '|    Expected user info                                                |\n' +
                                ' --------------------------------------------------------- '
                        })
                    });
                    return
                }
                this.setState(prevState => {
                    return ({
                        text: prevState.text + '\n' + this.props.userID.data.message
                    })
                });
                break;
            case './ex12':
                this.setState(prevState => {
                    return ({
                        cam: true
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
                parity(this._ex02Setstate, this.state.text);
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

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log(imageSrc);
        this.setState({cam: false, imageSrc})
    };


    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };
        if (this.state.cam === true) {
            return (
                <div>
                    <Webcam
                        audio={false}
                        height={350}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={350}
                        videoConstraints={videoConstraints}
                    />
                    <button onClick={this.capture}>Capture photo</button>
                </div>
            )
        }
        return (
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <form onSubmit={this._handleSubmit}>
                        <textarea onKeyDown={this._onKeyPress} value={this.state.text} className={'col-md-12'}
                                  style={{background: 'black', color: 'white', height: '50vh'}}/>
                    </form>
                    <img  src={`${this.state.imageSrc}`} />
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