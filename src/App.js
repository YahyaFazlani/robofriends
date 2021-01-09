import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './robots';

function App() {
  return (
    <div>
      <h1>Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
