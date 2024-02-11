import { toast } from 'react-hot-toast';

const notify = (message: string, type: string): string | undefined => {
  if (type === 'success') {
    return toast.success(message, {
      position: 'bottom-right',
      duration: 2000,
    });
  } else if (type === 'error') {
    return toast.error(message, {
      position: 'bottom-right',
      duration: 2000,
    });
  }
};

export default notify;