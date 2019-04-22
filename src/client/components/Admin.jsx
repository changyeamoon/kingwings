import React, { memo } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

const Admin = props => (
  <div>
    wow you reach a very private page.{' '}
    <button type="button" onClick={() => props.setLogin(false)}>
      logout
    </button>
  </div>
);
const mapStateToProps = store => ({
  items: store.menu.items,
});

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => {
    dispatch(actions.deleteItem(itemId));
  },
});

class AdminClass extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      stuff: [
        { name: 'chang' },
        { name: 'jeff' },
        { name: 'alaina' },
        { name: 'jordan' },
        { name: 'tristan' },
        { name: 'carolyn' },
        { name: 'harmon' },
        { name: 'ben' },
        { name: 'jae' },
        { name: 'jay' },
        { name: 'robert' },
        { name: 'melody' },
        { name: 'howard' },
        { name: 'emilia' },
        { name: 'johnathon' },
        { name: 'joel' },
        { name: 'kenny' },
        { name: 'braden' },
        { name: 'adrian' },
      ],
    };
    this.filterWithSearch = this.filterWithSearch.bind(this);
    this.listNames = this.listNames.bind(this);
  }

  filterWithSearch() {
    return this.state.stuff.filter(thing => {
      return thing.name.match(new RegExp(this.state.search, 'g'));
    });
  }

  listNames() {
    return this.filterWithSearch().map((thing, i) => (
      <Names key={`${i}${thing.name}`} name={thing.name} />
    ));
  }

  render() {
    return (
      <div>
        <div>
          <span>wow you reach a very private page. </span>
          <button type="button" onClick={() => this.props.setLogin(false)}>
            logout
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
          <button
            type="button"
            onClick={() => this.setState({ stuff: [...this.state.stuff, { name: 'bob' }] })}
          >
            add something
          </button>
          <button type="button" onClick={() => this.props.deleteItem(0)}>
            delete something
          </button>
          <ul>{this.listNames()}</ul>
        </div>
      </div>
    );
  }
}

class Names extends React.PureComponent {
  render() {
    return <li>- {this.props.name} </li>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminClass);
