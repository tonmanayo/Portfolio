import React, {Component} from "react";
import UserIDActions from "../../reducers/userIDRedux";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import io from 'socket.io-client'

import ReactModal from 'react-modal';

class Day02Ex00 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userModal: true,
      username: '',
      message: '',
      messages: [{user: 'agent', message: ' agent testing '}, {user: 'client', message: 'client testing'}],
    };
    this.props.userIdGetRequest();
    this.socket = io('http://localhost:3000')
  }

  addMessage = data => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);
  };

  componentDidMount() {
    this.socket.on('RECEIVE_MESSAGE', (data) => {
      this.addMessage(data);
    });
  }

  send = ev => {
    const {username, message} = this.state;
    ev.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      username,
      message
    });
    this.setState({message: ''});
  };

  handleSubmit = () => {
    this.setState({
      userModal: false,
    })
  };

  handleUsernameInput = (username) => {

    this.setState({
      username: username.target.value
    })
  };

  handleMessageInput = (message) => {
    this.setState({
      message: message.target.value
    })

  };

  render() {
    const {user} = this.state;

    return (
      <div className={'container-fluid'}>
        <ReactModal
          isOpen={this.state.userModal}
          onRequestClose={() => this.setState({userModal: false})}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
              position: 'absolute',
              top: '150px',
              left: '400px',
              right: '150px',
              bottom: '150px',
            }
          }}
        >
          <div className={'col-md-6 col-md-offset-3'} style={{paddingTop: '15%'}}>
            <div className="card" style={{textAlign: 'center'}}>
              <div className="header">
                <h4>Enter Username</h4>
              </div>
              <div className="content">
                <div className="form-group">
                  <input
                    value={this.state.username}
                    onChange={this.handleUsernameInput}
                  />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-fill btn-info">Submit</button>
              </div>
            </div>
          </div>
        </ReactModal>
        <div className={'row'}>
          <div className={'col-md-12 col-xs-12'}
               style={{height: '70vh', backgroundColor: '#efefef', overflowY: 'scroll'}}>
            <div className="row">
              <div className={'col-md-12 col-xs-12'}>
                {
                  this.state.messages.map(message => (
                    <div className="row">
                      {
                        message.user === 'agent' ? (<div className={'col-md-1 col-sx-1'} >
                          <div style={{height: 100, borderRadius: 50, backgroundColor: 'green', width: 100, border: 'solid 2px white'}}>
                            <p style={{textAlign: 'center', paddingTop: 40}}>P</p>
                          </div>
                        </div>) : (<div className={'col-md-11 col-sx-11'}>
                          <div className="row">
                            <div style={{backgroundColor: 'white', height: 90, marginTop: 5, borderRadius: 20, marginLeft: '5px', position: 'absolute', right: 0}}>
                                <p style={{paddingTop: 35, margin: '0 10px 0 10px'}}>{message.message}</p>
                            </div>
                          </div>
                        </div>)
                      }
                      {
                        message.user === 'agent' ? (<div className={'col-md-11 col-sx-11'}>
                          <div className="row">
                            <div style={{backgroundColor: 'white', height: 90, marginTop: 5, borderRadius: 20, marginRight: '5px', position: 'absolute', left: 0}}>
                              <p style={{paddingTop: 35, margin: '0 10px 0 10px'}}>{message.message}</p>
                            </div>
                          </div>
                        </div>) : (<div className={'col-md-1 col-sx-1'} >
                          <div style={{height: 100, borderRadius: 50, backgroundColor: 'green', width: 100, border: 'solid 2px white'}}>
                            <p style={{textAlign: 'center', paddingTop: 40}}>P</p>
                          </div>
                        </div>)
                      }
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{height: '6vh', backgroundColor: '#efefef', borderTop: '1px'}}>
            <form onSubmit={this.send}>
              <div className="row">
                <div className="form-group col-md-10 no-highlight"
                     style={{paddingTop: 5, borderRadius: '5px', backgroundColor: 'white', margin: 5}}>
                  <input
                    placeholder={'send a message...'}
                    value={this.state.message}
                    onChange={this.handleMessageInput}
                    style={{height: '4vh', width: '100%', borderWidth: '0px'}}
                  />
                </div>
                <div className="col-md-1" style={{margin: 5}}>
                  <button type="submit" className="btn btn-fill btn-info">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userID: state.userID,
});

const mapDispatchToProps = dispatch => ({
  userIdGetRequest: () => dispatch(UserIDActions.userIdGetRequest()),
  userIdPostRequest: (id, pic) => dispatch(UserIDActions.userIdPostRequest(id, pic)),
  userIdDeleteRequest: (id) => dispatch(UserIDActions.userIdDeleteRequest(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Day02Ex00)
);