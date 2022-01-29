import Feed from './Feed';
const Home = ({videos}) => {
   
  return (
    <main className='Home'>
      <Feed videos={videos}/>
    </main>
  )
};

export default Home;
