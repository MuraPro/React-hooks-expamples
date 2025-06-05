import { useCallback, useState } from 'react';
import ItemsList from '../shared/itemslist';

function UseCallback() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
  }, [count]); // useCallback кеширует функцию, возвращяет саму функцию

  return (
    <div className='d-flex flex-column mt-5 align-items-center'>
      <h1 style={styles}>Вычисляемое свойство: {count}</h1>
      <div className='mb-3'>
        <button
          className={'btn btn-success me-3'}
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className={'btn btn-warning'}
          onClick={() => setColored((prev) => !prev)}
        >
          изменить
        </button>
      </div>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default UseCallback;
