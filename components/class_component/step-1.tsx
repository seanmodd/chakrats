// ! STEP 1 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class List extends React.Component {
  render() {
    return (
      <ul>
        <li>Learn React</li>
        <li>Learn Next.js</li>
        <li>???</li>
        <li>Profit</li>
      </ul>
    );
  }
}

export default List;

// ! STEP 2 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
class ListStep2 extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

const ListStep2Container = () => (
  <ListStep2 items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
);

// export default ListStep2Container;

// ! STEP 3 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
class ListStep3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredItems: this.props.items,
    };

    // This binding is necessary to make `this` work in the callback
    this.filterItems = this.filterItems.bind(this);
  }

  filterItems(e) {
    const searchValue = e.target.value;
    const currentItems = [...this.props.items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    this.setState({
      filteredItems: matchingItems,
    });
  }

  render() {
    return (
      <>
        <input onChange={this.filterItems} />
        <ul>
          {this.state.filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

const ListStep3Container = () => (
  <ListStep3 items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
);

// export default ListStep3Container;
