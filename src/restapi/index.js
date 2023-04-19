import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    authorization: 'basic 3dd1537c-4ae1-4a4b-a24d-9316f5a5af95',
  },
  timeout: 5000,
  baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
});

const read = async () => {
  try {
    const endpoint = '/tasks';
    const response = await axiosInstance.get(endpoint);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    return writeError(err);
  }
};

const add = async (data) => {
  try {
    const endpoint = '/tasks';
    await axiosInstance.post(endpoint, data);
    return {
      success: true,
    };
  } catch (err) {
    return writeError(err);
  }
};

const update = async (data) => {
  try {
    const endpoint = `/tasks/${data.id}`;
    await axiosInstance.put(endpoint, data);
    return {
      success: true,
    };
  } catch (err) {
    writeError(err);
  }
};

// TODO: Correct error returning undefined.
const deleteTask = async (id) => {
  try {
    const endpoint = `/tasks/${id}`;
    await axiosInstance.delete(endpoint);
    return {
      success: true,
    };
  } catch (err) {
    writeError(err);
    console.error('Error: ', err);
  }
};

const deleteAll = async () => {
  try {
    const endpoint = '/tasks/all';
    await axiosInstance.delete(endpoint);
    return {
      success: true,
    };
  } catch (err) {
    writeError(err);
  }
};

const writeError = (err) => {
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
};

export { read, add, update, deleteTask, deleteAll };
