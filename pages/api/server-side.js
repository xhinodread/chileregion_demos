

const ServerSide = ({ joke }) => {
  console.log('ServerSide joke');

  return (
    <div className="container">
      <span className="">Today s joke:</span>
      <h1 className="text-center">{joke}</h1>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  console.log('getServerSideProps');

  const url = 'https://icanhazdadjoke.com/';
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  console.log(data);

  return {
    props: {
      joke: data.joke,
    },
  };
}

export default ServerSide;
