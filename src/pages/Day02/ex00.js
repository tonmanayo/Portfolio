import React, {Component} from "react";
import UserIDActions from "../../reducers/userIDRedux";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Webcam from "react-webcam";

class Day02Ex00 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cam: false
    };
    this.props.userIdGetRequest();
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.userIdPostRequest(this.props.userID.ip, imageSrc);
    this.setState({cam: false, imageSrc})
  };

  delete = (id) => {
    this.props.userIdDeleteRequest(id);
    this.props.userIdGetRequest();
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
          <button onClick={() => this.capture()}>Capture photo</button>
        </div>
      )
    }
    return (
      <div>
        <div className={'row'}>
          <div className={'col-md-6'}>
            <h4 className="title">Webcam Selfie <small>Each picture is taken using the webcam and saved to a
              mongodb</small></h4>
          </div>
          <div className={'col-md-6'}>
            <button className="btn btn-info btn-fill btn-wd"
                    onClick={() =>
                      this.setState(prevState => {
                        return ({
                          cam: true
                        })
                      })}>Add New Picture
            </button>
          </div>
        </div>
        <div className="row">
          {
            this.props.userID.data.length > 0 ? this.props.userID.data.map(pic => <div className="col-md-4">
              <div className="card">
                <div className="content text-center">
                  <img src={pic.pic}/>
                  <button style={{marginTop: '10px'}} className="btn btn-info btn-fill btn-wd"
                          onClick={() =>
                            this.delete(pic.id)
                            }>Delete
                  </button>
                </div>
              </div>
            </div>) : <div/>
          }
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