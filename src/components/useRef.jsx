import { useState, useRef, useEffect } from 'react';

function UseRef() {
  const [value, setValue] = useState('initial');
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // сохраняет значения между рендерами, не перерисовывает компонент
  const inputRef = useRef(null); // ссылка на дом ноду через ref={}
  const prevValue = useRef(''); // предыдущее значение
  const timeoutRef = useRef(null); // таймер

  useEffect(() => {
    renderCount.current++;
    // console.log(inputRef.current.value);
  });

  useEffect(() => {
    const tick = () => {
      setCount((prev) => prev + 1);
      timeoutRef.current = setTimeout(tick, 1000);
    };

    timeoutRef.current = setTimeout(tick, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const focus = () => inputRef.current.focus();

  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1 className='w-100 mb-3'>
        Колличество рендеров: {renderCount.current}
      </h1>
      <h2 className='w-100 mb-3'>Прошлое состояние: {prevValue.current}</h2>
      <h3>Секунд прошло: {count}</h3>
      <input
        ref={inputRef}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className='form-control w-100 mt-3'
      />
      <button className='btn btn-primary mt-3' onClick={focus}>
        Фокус
      </button>
    </div>
  );
}

export default UseRef;
