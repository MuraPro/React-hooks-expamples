import Main from '../shared/main';
import Alert from '../shared/alert';
import AlertProvider from '../provider/alertprovider';

function UseContext() {
  return (
    <AlertProvider>
      <div className='container pt-3'>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
}

export default UseContext;
