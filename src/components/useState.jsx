import { useState } from 'react';

// function computeInitialCounter() {
//   console.log('Some calculations...');
//   return Math.trunc(Math.random() * 20);
// }

function UseState() {
  //  const [count, setCounter] = useState(() => computeInitialCounter()); // Оптимизация функции
  const [count, setCounter] = useState(0);
  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  });

  function incriment() {
    setCounter((prev) => prev + 1);
  }

  function decriment() {
    setCounter((prev) => {
      if (prev === 0) return prev; // ← если 0, не уменьшаем
      return prev - 1;
    });
  }
  function updateTitle() {
    setState((prev) => {
      return { ...prev, title: 'Новое название' };
    });
  }
  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1 className='mb-3'>Счетчик: {count}</h1>
      <div>
        <button className='btn btn-success me-3' onClick={incriment}>
          +
        </button>
        <button className='btn btn-danger' onClick={decriment}>
          -
        </button>
      </div>

      <hr />

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button className='btn btn-danger' onClick={updateTitle}>
        Изменить название
      </button>
    </div>
  );
}

export default UseState;
