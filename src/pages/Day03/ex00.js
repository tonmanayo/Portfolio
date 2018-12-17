import React, {Component} from "react";
import UserIDActions from "../../reducers/userIDRedux";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import io from 'socket.io-client'
import UserMessage from "./../../components/UserMessage"
import ReactModal from 'react-modal';

class Day02Ex00 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userModal: true,
      username: '',
      message: '',
      type: 'agent',
      messages: [],
      agents: [],
      clients: []
    };
    this.socket = io('http://localhost:3000');
    this.props.userIdGetRequest();
  }

  addMessage = data => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);
  };

  addAgents = agent => {
    console.log(agent);
    this.setState(prevState => ({
        agents: [...prevState.agents, agent]
      }));
    console.log('this.state.agents');
    console.log(this.state.agents);
  };

  addClients = client => {
    console.log(client);
    this.setState(prevState => ({
      clients: [...prevState.clients, client]
    }));
    console.log('this.state.clients');
    console.log(this.state.clients);
  };

  componentDidMount() {
    this.scrollToBottom();
    this.socket.on('RECEIVE_MESSAGE', (data) => {
      this.addMessage(data);
    });
    this.socket.on('UPDATE_AGENTS', (username) => {
      this.addAgents(username);
    });
    this.socket.on('UPDATE_CLIENTS', (username) => {
      this.addClients(username);
    });
  }

  send = ev => {
    const {username, message} = this.state;
    ev.preventDefault();
    this.socket.emit(`SEND_MESSAGE_${this.state.type}`, {
      username,
      message,
    });
    this.setState({message: ''});
  };

  handleSubmit = () => {
    this.setState({
      userModal: false,
    });

    this.socket.emit('NEW_USER', {type: this.state.type, username: this.state.username});

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

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
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
                  <div className="col-md-6 col-md-offset-3" style={{alignText: "left"}}>
                  <input
                    value={this.state.username}
                    onChange={this.handleUsernameInput}
                  />
                  </div>
                  <div className="col-md-3" style={{float: "left"}}>
                  <input onClick={() => this.setState({type: 'agent'})} type="radio" name="type" value="agent" /> Agent<br />
                  <input onClick={() => this.setState({type: 'client'})} type="radio" name="type" value="client" /> Client<br />
                </div>
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-fill btn-info">Submit</button>

              </div>
            </div>
          </div>
        </ReactModal>
        <div className={'row'}>
          <div className={'col-md-12 col-xs-12'}
               style={{height: '70vh', backgroundColor: '#efefef', overflow: 'auto'}}>
            <div className="row">
              <div className={'col-md-12 col-xs-12'}>
                {
                  this.state.messages.map(message => (
                    <UserMessage message={message}/>
                  ))
                }
              </div>
            </div>
            <div style={{ float:"left", clear: "both" }}
                 ref={(el) => { this.messagesEnd = el; }}>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Day02Ex00));