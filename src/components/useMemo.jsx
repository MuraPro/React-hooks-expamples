import { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {
  console.log('complexCompute');

  let i = 0;
  while (i < 1000000000) i++;

  return num * 2;
}

function UseMemo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(
    () => ({ color: colored ? 'darkred' : 'black' }),
    [colored]
  ); // useMemo кеширует функцию, возвращяет значение'

  useEffect(() => {
    console.log('вызывает useEffect хотя он отслеживает стили');
  }, [styles]);

  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <div>
        <button
          className={'btn btn-success me-3'}
          onClick={() => setNumber((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className={'btn btn-danger me-3'}
          onClick={() => setNumber((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className={'btn btn-warning'}
          onClick={() => setColored((prev) => !prev)}
        >
          изменить
        </button>
      </div>
    </div>
  );
}

export default UseMemo;
