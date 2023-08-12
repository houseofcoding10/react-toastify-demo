import { ToastContainer, toast } from 'react-toastify';
import { Cart3 } from 'react-bootstrap-icons';
import 'react-toastify/dist/ReactToastify.css';

import Button from './components/Button';

const App = () => {
  const handleClick = (type: string) => {
    if (type === 'primary') {
      toast.info('Your plan is expired');
    } else if (type === 'secondary') {
      toast.success('You registered successfully!', {
        icon: false,
      });
    } else if (type === 'dark') {
      toast.warning('Are you sure?', {
        position: 'bottom-right',
      });
    } else if (type === 'warning') {
      toast.warning('Your cart is empty', {
        icon: <Cart3 color='yellow' size={20} title='hello' />,
        theme: 'dark',
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className='container'>
        <Button title='Simple Alert' type='primary' onClick={handleClick} />
        <Button
          title='Alert Without Icon'
          type='secondary'
          onClick={handleClick}
        />
        <Button
          title='Show Alert Differently'
          type='dark'
          onClick={handleClick}
        />
        <Button
          title='Alert With Custom Icon'
          type='warning'
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default App;
