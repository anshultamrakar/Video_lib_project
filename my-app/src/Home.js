import { useContext } from 'react';
import DataContext from './Context/DataContext';
import Feed from './Feed';
const Home = () => {
   const {searchResult} = useContext(DataContext)
  return (
    <main className='Home'>
      <Feed videos={searchResult}/>
    </main>
  )
};

export default Home;
