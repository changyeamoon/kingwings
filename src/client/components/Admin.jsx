import React, { memo } from 'react';

const Admin = props => (
  <div>
    wow you reach a very private page.{' '}
    <button type="button" onClick={() => props.setLogin(false)}>
      logout
    </button>
  </div>
);

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
        { name: 'donte' },
        { name: 'tristan' },
        { name: 'carolyn' },
        { name: 'harmon' },
        { name: 'ben' },
        { name: 'jae' },
        { name: 'jay' },
        { name: 'robert' },
        { name: 'melody' },
        { name: 'howard' },
      ],
    };
    this.filterWithSearch = this.filterWithSearch.bind(this);
  }

  filterWithSearch() {
    return this.state.stuff.filter(thing => {
      return thing.name.match(new RegExp(this.state.search, 'g'));
    });
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
          <ul>
            {this.filterWithSearch().map((thing, i) => (
              <Names key={`${i}${thing.name}`} name={thing.name} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const Names = memo(function component(props) {
  return <li>- {props.name} </li>;
});

export default AdminClass;
