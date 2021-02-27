export const List = ({ items }) => (
  <div>
    {items.map((item) => (
      <li key={item.id}>{item}</li>
    ))}
  </div>
);
const ListContainer = () => (
  <div>
    <List items={['one', 'two', 'threeMOTHERFUCKERS']} />
  </div>
);

export default ListContainer;

