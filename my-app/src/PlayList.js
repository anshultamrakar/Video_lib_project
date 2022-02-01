const PlayList = ({playList}) => {
  return (
    <main className="">
        {
          playList.map((item) => (
            <li key = {item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            </li>
          ))
        }
    </main>
  )
 
};

export default PlayList;
