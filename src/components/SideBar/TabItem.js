import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


const TabItem = (props) => {
    function isPathActive(path) {
        return props.location.pathname.startsWith(path);
    }
        return (
                <li className={isPathActive(props.parentPath) || props.toggle ? 'active' : null}>
                    <a onClick={() => props.setParentOpen()}
                       data-toggle="collapse">
                        <i className={props.image}/>
                        <p>
                            {props.parentName}
                            <b className="caret"/>
                        </p>
                    </a>
                    <Collapse in={props.toggle}>
                        <div>
                            <ul className="nav">
                                {
                                    props.childNames.map(key =>
                                        <li className={isPathActive(key.childPath) ? 'active' : null}>
                                            <Link to={key.childPath}>{key.childName}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </Collapse>
                </li>
        );
};

export default withRouter(TabItem);