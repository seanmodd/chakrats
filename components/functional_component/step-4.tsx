import React from 'react';
import { useColorMode, Text } from '@chakra-ui/react';
import FlexSean from './FlexSean';

const List = ({ items, ...props }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);
  const { colorMode } = useColorMode();

  const navHoverBg = {
    light: 'gray.100',
    dark: 'gray.700',
  };
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
      <FlexSean
        className="SEANFLEX"
        height="auto"
        width="auto"
        backgroundColor={{ backgroundColor: navHoverBg[colorMode] }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        opacity={1}
        minHeight="200px"
      >
        <div className="SEANFORM" maxWidth="500px">
          <ul {...props}>
            {filteredItems.map((item) => (
              <Text fontSize="36px" key={item}>
                {item}
              </Text>
            ))}
          </ul>
        </div>
      </FlexSean>
    </>
  );
};

const ListContainer = () => (
  <List
    aria-label="My Fancy List"
    items={['Learn React', 'Learn Next.js', '???', 'Profit']}
  />
);

export default ListContainer;
