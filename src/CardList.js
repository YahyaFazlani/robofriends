import React from 'react';
import Card from './Card';
import { robots } from './robots';

function CardList() {
  const CardComponent = robots.map((user, index) => {
    return (
      <Card id={robots[index].id} name={robots[index].name} email={robots[index].email} />
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
