

const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const PersonalList = () => <List items={['Learn React', 'Learn Next.js']} />;

export default PersonalList;
