import axios from 'axios';

const read = async () => {
  try {
    const endpoint =
      'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api/tasks';
    const config = {
      headers: {
        authorization: 'basic 3dd1537c-4ae1-4a4b-a24d-9316f5a5af95',
      },
    };
    const response = await axios.get(endpoint, config);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    let message;
    const status = err.response?.status;
    switch (status) {
      case 401:
        message =
          'Failed to authenticate your user. Please check your credentials and try again.';
        break;
      case 404:
        message =
          'It was not possible to connect to the server. Please contact the system administrator.';
        break;
      default:
        message = 'There was an unexpected error. Please try again later.';
    }
    return {
      success: false,
      error: message,
    };
  }
};

export { read };
