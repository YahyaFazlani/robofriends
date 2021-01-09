import Card from './Card';

function CardList({ robots }) {
  const CardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        lazy="true"
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return (
    <main className="mw5 mw7-ns center pa3">
      {CardComponent}
      {CardComponent}
      {CardComponent}
    </main>
  );
}

export default CardList;
