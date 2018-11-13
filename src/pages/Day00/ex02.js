import React, { Component } from 'react';
import {Images} from './../../assets/images'

class Day00Ex02 extends Component {
    constructor(props) {
        super (props);
        this.state = {
            grey: '#909090',
            background: '#585858',
            item: 'hand'
        };
        document.title = 'Day00Ex02'
    }

    _onClick = (object) => {
        this.setState({
            item: object,
        });
    };

    render() {
       const { item } = this.state;
        return (
            <div className={'container-fluid'} >
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'row'} style={{background: this.state.background, paddingTop: '10px', borderRadius: '10px'}}>
                            <div style={{height:'15vh', background: this.state.background, marginLeft: '10px',}}>
                                <div style={{height:'13vh', borderRadius: '10px', width: '99%', margin: '0 auto', background: this.state.grey, boxShadow: '5px 5px 5px black', float: 'left'}}>
                                    <img src={Images.dayOfThe42} style={{height: '13vh', borderRadius: '10px'}} alt=""/>
                                    <div style={{height: '100%', width: '2%', float: 'right'}}>
                                        <div style={{height: '80%', paddingRight: '5%'}}>
                                            <a href="https://www.disney.com"> <img src={Images.reload} style={{height: '2vh', float: 'right', marginTop: '5px', paddingRight: '20%'}}/></a>
                                        </div>
                                        <div style={{height: '10%', bottom: 0}}>
                                            <a href="https://www.relaischateaux.com/"> <img src={Images.close} style={{height: '2vh', float: 'right', paddingRight: '20%'}}/></a>
                                        </div>
                                    </div>
                                    <img src={Images.magnifyingGlass} style={{height: '15vh', float: 'right', paddingRight: '1%', marginTop: '5px'}}/>
                                </div>
                            </div>
                            <div style={{height:'70vh', background: this.state.background}}>
                                <div style={{width: '15%', background: this.state.background, float: 'left', height: '100%', marginLeft: '1.5%', marginRight: '10px'}}>
                                    <div style={{height: '80%', background: this.state.grey, width: '80%', borderRadius: '10px', boxShadow: '5px 5px 5px black', margin: '0 auto'}}>
                                        <img onClick={() => this._onClick('advance')} title="advance" src={Images.arrow} style={{border: item === 'advance' ? '5px red solid' : '',height: '17%', display: 'block', margin: '0 auto', paddingTop: '20px'}}/>
                                        <img onClick={() => this._onClick('hand')} title="take" src={Images.hand} style={{border: item === 'hand' ? '5px red solid' : '',height: '15%', display: 'block', margin: '0 auto', marginTop: '15px'}}/>
                                        <img onClick={() => this._onClick('eye')} title="look" src={Images.eye} style={{border: item === 'eye' ? '5px red solid' : '', height: '15%', display: 'block', margin: '0 auto', marginTop: '10px'}}/>
                                        <img onClick={() => this._onClick('use')} title="use" src={Images.tools} style={{border: item === 'use' ? '5px red solid' : '',height: '15%', display: 'block', margin: '0 auto', marginTop: '10px'}}/>
                                        <img onClick={() => this._onClick('speak')} title="speak" src={Images.chatIcon} style={{border: item === 'speak' ? '5px red solid' : '',height: '15%', display: 'block', margin: '0 auto', marginTop: '10px'}}/>
                                    </div>
                                </div>
                                <div style={{width: '65%', background: this.state.grey, borderRadius: '10px', boxShadow: '5px 5px 5px black', marginRight: '10px' ,height: '100%', float: 'left', textAlign: 'center' }}>
                                    <div style={{height: '1%'}}>

                                    </div>
                                    <div style={{backgroundImage: `url(${Images.cluster})`, height: '98%', width: '95%', top: '-20px', margin: '0 auto'}} >
                                        <div style={{width: '100%', height: '50%'}}>
                                        </div>
                                        <div style={{width: '100%', height: '50%'}}>
                                            <div style={{width: '50%', height: '40%', float: 'left'}}>
                                                <a href="https://www.ikea.com/" style={{float: 'right', height: '80%', width: '30%', marginTop: '10%'}} />
                                            </div>
                                            <div style={{float: 'left', width: '50%', height: '40%'}}>
                                                <a href="https://apple.co.za" style={{ width: '25%', height: '70%', float: 'right', marginRight: '18%'}} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width: '15%', background: this.state.background, height: '100%', float: 'left'}}>
                                    <div style={{height: '80%', background: this.state.grey, width: '80%', borderRadius: '10px', boxShadow: '5px 5px 5px black', margin: '0 auto'}}>
                                        <img src={Images.book} style={{height: '25%', display: 'block', margin: '0 auto', paddingTop: '20px'}}/>
                                        <img src={Images.towel} style={{height: '15%', display: 'block', margin: '0 auto', marginTop: '15px'}}/>
                                        <div style={{background: 'blue', height: '10%', backgroundImage: `url(${Images.brick})`, margin: '5px' }} />
                                    </div>
                                </div>
                            </div>
                            <div style={{height:'15vh', background: this.state.background, padding: '10px'}}>
                                <div style={{background: 'springgreen', width: '50%', height: '20%', borderRadius: '10px', boxShadow: '5px 5px 5px black', zIndex: '999', position: 'absolute', marginTop: '-5%'}}>
                                    <p style={{paddingLeft: '2px', marginBottom: '2px'}}>Welcome to tmack's <strong > WethinkCode_</strong> portfolio</p>
                                    <p style={{marginBottom: '0px'}}><strong > WethinkCode_</strong> is a Tuition-free, two year course that is sponsored by companies looking to support the development of local tech talent in the digital economy.</p>
                                    <p style={{marginTop: '10px', height: '100%',top: 0 , width: '50%', float: 'left'}}>Please enter your contact details</p>
                                    <input style={{marginTop: '10px',width: '30%', float: 'left'}} type="text"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day00Ex02;