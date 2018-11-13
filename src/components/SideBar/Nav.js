import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import TabItem from "./TabItem";
import {menuItems} from './../../navigation/navigationConfig'

class Nav extends Component {

constructor(props) {
  super(props);
    this.state = {componentMenu: false, formsMenu: false}
}

  _openTab = (tabName) => {
    this.setState(prevState => {
        return {
            [tabName]: !prevState[tabName]
        }})
  };


  render() {
    let { location } = this.props;

    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"/>
            <p>Dashboard</p>
          </Link>
        </li>
          {
            menuItems.map((key) =>
                <TabItem
                  parentName={key.parentName}
                  toggle={this.state[key.id]}
                  setParentOpen={() => this._openTab(key.id)}
                  image={key.image}
                  childNames={key.childNames}
                />
            )
          }

        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.mapMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ mapMenuOpen: !this.state.mapMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-map-marker"></i>
            <p>Map <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-graph"></i>
            <p>Charts</p>
          </Link>
        </li>
        <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i className="pe-7s-date"></i>
            <p>Calendar</p>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);