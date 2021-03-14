import Card from './Card';

function CardList({ robots }) {
  const CardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <main className="pa3">{CardComponent}</main>;
}

export default CardList;
