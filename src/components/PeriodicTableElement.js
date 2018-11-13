import React from 'react'

const PeriodicTableElement = (props) => {
    const {name, color, symbol, atomic_mass, number} = props.elementProperties;
    return (
        <div onClick={() => props.onClick({...props.elementProperties, modal: true})} style={{ background: color, border:  '2px solid grey'}} className={'Element'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'col-md-0'}>
                            <b style={{fontSize: 10, float: 'left', paddingLeft: '2px'}}>{number}</b>
                         </div>
                    </div>
                </div>
                <div className={'row'} style={{ textAlign: 'center'}}>
                    <b style={{fontSize: 25, color: 'grey'}}>{symbol}</b>
                </div>
                <div className={'row'} style={{textAlign: 'center'}}>
                    <text style={{fontSize: 10}}>{name}</text>
                </div>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <div className={'col-md-6 col-md-offset-3'}>
                    <b style={{fontSize: 10}}>{atomic_mass ? Math.round(atomic_mass * 100) / 100 : ''}</b>
                        </div>
                    </div>
                </div>

        </div>
    )
};

export default PeriodicTableElement;