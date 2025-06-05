import { useEffect, useState } from 'react';

function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <ul className='list-group d-flex flex-row flex-wrap gap-3'>
      {items.map((i) => (
        <li key={i} className='list-group-item list-group-item-primary'>
          {i}
        </li>
      ))}
    </ul>
  );
}

export default ItemsList;
