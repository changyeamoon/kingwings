import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2em;
  width: 25em;
  height: 25em;
  margin: 0 auto;
`;
const Login = ({ login, setLogin, location }) => {
  const { from } = location.state || { from: { pathname: '/' } };
  return login ? (
    <Redirect to={from} />
  ) : (
    <Container>
      <div>you gotta log in as an admin to see {from.pathname} son </div>

      <button
        type="button"
        onClick={() => {
          setLogin(true);
        }}
      >
        log in
      </button>
    </Container>
  );
};

class LoginClass extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pass: '',
      attempted: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    if (!this.state.attempted) this.setState({ attempted: true });
    if (this.state.user === 'admin' && this.state.pass === 'ilovetesting') {
      this.props.setLogin(true);
    }
  }

  render() {
    const { login, setLogin, location } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    return login ? (
      <Redirect to={from} />
    ) : (
      <Container>
        <div>you gotta log in as an admin to see {from.pathname} son </div>
        <form>
          <div>
            <label htmlFor="username"> Enter Username </label>
            <input
              type="text"
              name="username"
              value={this.state.user}
              onChange={e => this.setState({ user: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password"> Enter Password </label>
            <input
              type="password"
              name="password"
              value={this.state.pass}
              onChange={e => this.setState({ pass: e.target.value })}
            />
          </div>
          <div>
            <button type="button" onClick={this.handleLogin}>
              log in
            </button>
            {this.state.attempted ? (
              <div style={{ color: 'red' }}>sorry dude. try again.</div>
            ) : (
              <span />
            )}
          </div>
        </form>
      </Container>
    );
  }
}

export default LoginClass;
