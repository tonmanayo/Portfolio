import React, { Component } from 'react';
import {Images} from './../../assets/images'
class Day00Ex00 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'tony'
        };
        document.title = 'Basics'
    }
    render() {
        return (
            <div className={'container-fluid'} style={{background: 'pink'}}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-6 col-md-offset-3 header'} style={{textAlign: 'center'}}>
                                <h1 className={'title'}>-Ex00-</h1>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-6'} style={{textAlign: 'center'}}>
                                <div className={'card'}>
                                    <div className={'row'}>
                                        <img style={{height: '250px', width: '250px'}} src={Images.amazon} alt=""/>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <a href="https://amazon.com">Amazon</a>
                                </div>
                            </div>
                            <div className={'col-md-6'} style={{textAlign: 'center'}}>
                                <div className={'card'} >
                                    <div className={'row'}>
                                        <img style={{objectFit: 'cover', height: '250px'}}  src={Images.takealot} alt=""/>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <a href="https://takealot.com">Take a lot</a>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <i style={{fontFamily: 'monospace', float: 'right'}}>tmack © {(new Date().getFullYear())}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day00Ex00;