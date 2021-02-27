// ! STEP 1 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

const List = () => (
  <ul>
    <li>Learn React</li>
    <li>Learn Next.js</li>
    <li>???</li>
    <li>Profit</li>
  </ul>
);

export default List;

// ! STEP 2 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
const ListStep2 = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ListStep2Container = () => (
  <ListStep2 items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
);

// export default ListStep2Container;

// ! STEP 3 •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
const ListStep3 = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const ListStep3Container = () => (
  <ListStep3
    aria-label="My Fancy ListStep3"
    items={['Learn React', 'Learn Next.js', '???', 'Profit']}
  />
);

// export default ListStep3Container;

// ! STEP 4
const ListStep4 = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const ListStep4Container = () => (
  <ListStep4
    aria-label="My Fancy ListStep4"
    items={['Learn React', 'Learn Next.js', '???', 'Profit']}
  />
);

// export default ListStep4Container;
