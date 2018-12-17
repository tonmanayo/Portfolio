import React from 'react';
import cx from 'classnames';

const UserMessage = (props) => {
  const {message} = props;
  return (
    <div className={'row'}>
      <div className={cx('col-md-1 col-sx-1 col-sm-1', {'pull-right': message.type === 'agent'})}>
        <div style={{height: 100, borderRadius: 50, backgroundColor: 'green', width: 100, border: 'solid 2px white', float: message.type === 'agent' ? 'left' : 'right'}}>
          <p style={{textAlign: 'center', paddingTop: 40}}>{message.type === 'agent' ? "A" : "C"}</p>
        </div>
      </div>
      <div className={cx(
        {'col-md-11 col-sx-11': message.type !== 'agent'},
        {'col-md-11 col-sx-11 pull-left': message.type === 'agent'},

      )}>
        <div className="row">
          <div style={{
            backgroundColor: message.type === 'agent' ? 'white' : 'rgb(220, 248, 198)',
            height: 80,
            marginTop: 5,
            borderRadius: 20,
            position: 'absolute',
            right: message.type === 'agent' && 0,

          }}>
            <p style={{paddingTop: 30, margin: '0 10px 0 10px'}}>{message.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

UserMessage.defaultProps = {
  message: {}
};

export default UserMessage;