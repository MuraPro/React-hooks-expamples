import { useEffect, useState } from 'react';

function UseEffect() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  //   const [pos, setPos] = useState({ x: 0, y: 0 });

  //   useEffect(() => {
  //     console.log('Каждый раз при изменении state - render');
  //   });

  //   useEffect(() => {
  //     console.log('вызывается при монтировании (аналог componentDidMount)');

  //     return () => {
  //       console.log(
  //         'вызывается при размонтировании (аналог componentWillUnmount)'
  //       );
  //     };
  //   }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  //   const mouseMoveHandler = (event) => {
  //     setPos({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //   };

  //   useEffect(() => {
  //     window.addEventListener('mousemove', mouseMoveHandler);

  //     return () => {
  //       window.removeEventListener('mousemove', mouseMoveHandler);
  //     };
  //   }, []);

  return (
    <div className='container d-flex flex-column mt-5 align-items-center'>
      <h1>Ресурс: {type}</h1>

      <div className='mt-3'>
        <button
          className='btn btn-primary me-2'
          onClick={() => setType('users')}
        >
          Пользователи
        </button>
        <button
          className='btn btn-primary me-2'
          onClick={() => setType('todos')}
        >
          Todo
        </button>
        <button className='btn btn-primary' onClick={() => setType('posts')}>
          Посты
        </button>
      </div>

      <hr />

      <pre className='w-100'>{JSON.stringify(data, null, 2)}</pre>
      {/* <pre className='w-100'>{JSON.stringify(pos, null, 2)}</pre> */}
    </div>
  );
}

export default UseEffect;
