import React, { Component } from 'react';
import periodicTableInfo from './../../assets/mockData/periodicTable';
import PeriodicTableElement from './../../components/PeriodicTableElement'
import ReactModal from 'react-modal';

class Day00Ex01 extends Component {
    constructor(props) {
        super(props);
        this.state = {modal: false};

        document.title = 'Day00_Ex02'
    }

    _renderRows(elements) {
        return Object.keys(elements).map((key) =>
            <div style={{width: '5.5%', float: 'left'}}>
                <PeriodicTableElement
                    elementProperties={elements[key]}
                    onClick={this.onClick}
                />
            </div>
        )
    };

    onClick = (element) => {
        this.setState({
            ...element
        }, () => {
            console.log(this.state)
        })
    };

    _renderGrid() {
        return periodicTableInfo.map((elements) =>
            <div className={'row'} >
                {this._renderRows(elements)}
            </div>
        )
    };

    render() {
        const {
            name, appearance,
            atomic_mass, boil,
            category, density,
            discovered_by, melt,
            molar_heat, named_by,
            number, period,
            phase, source,
            spectral_img,
            summary, symbol,
        } = this.state;

        return (
            <div className={'container-fluid'} style={{background: 'grey'}}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        {this._renderGrid()}
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.modal}
                    onRequestClose={() => this.setState({modal: false})}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        content: {
                            position: 'absolute',
                            top: '150px',
                            left: '150px',
                            right: '150px',
                            bottom: '150px',
                        }
                    }}

                >
                    <div className={'col-md-12'}>
                        <div className={'col-md-6'}>
                            <h1>{name}</h1>
                            <h1>Symbol: {symbol}</h1>
                            <h3>Category: {category}</h3>
                            <h3>Discovered by: {discovered_by}</h3>
                            <h3>Named by: {named_by}</h3>
                            <h3>Appearance: {appearance}</h3>
                            <h3>Atomic Number: {number}</h3>
                            <h3>Period: {period}</h3>
                            <h3>Phase: {phase}</h3>
                            <h3>Atomic Mass: {atomic_mass}</h3>
                            <h3>Boiling point: {boil}°C</h3>
                            <h3>Melting point: {melt}°C</h3>
                            <h3>Molar heat: {molar_heat}°C</h3>
                            <h3>Density: {density}kg/m^3</h3>
                            <h4>{summary}</h4>
                            <h4>{source}</h4>
                        </div>
                        <div className={'col-md-6'}>
                            <img src={spectral_img} width="100%"/>
                        </div>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default Day00Ex01;