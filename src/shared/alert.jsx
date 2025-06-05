import { useAlert } from '../provider/alertprovider';

function Alert() {
  const message = useAlert();

  if (!message.visible) return null;

  return (
    <div className='alert alert-danger' onClick={message.toggle}>
      Пример важного оповещения системы...
    </div>
  );
}

export default Alert;
