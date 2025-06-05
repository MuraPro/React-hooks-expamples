import { useAlert } from '../provider/alertprovider';

function Main() {
  const { toggle } = useAlert();
  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button className='btn btn-success' type='button' onClick={toggle}>
        Показать alert
      </button>
    </>
  );
}

export default Main;
