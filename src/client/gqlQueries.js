const gql = {
  getItems: () => {
    const query = `{ 
      items {
        __typename 
        id
        name
        price
      } 
    }`;
    return fetch('api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then(r => r.json())
      .then(data => {
        return data;
      });
  },

  addCombo: (name, price) => {
    return fetch('api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `mutation($name: String!, $price: String!) { 
          addCombo(name: $name, author_price: $price) {
            id
            name
            price
          }
        }`,
        variables: { name, price },
      }),
    })
      .then(r => r.json())
      .then(data => {
        return data;
      });
  },

  deleteCombo: id => {
    return fetch('api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `mutation($id: ID!) { 
          deleteCombo(id: $id) {
            name
            price
          }
        }`,
        variables: { id },
      }),
    })
      .then(r => r.json())
      .then(data => data);
  },
};

export default gql;
