// Axios
import axios from 'axios';
// Constant
import constant from 'constant/Constant';

// Constant destructuring
const { baseURL, timeout } = constant;

// Axios config
const axiosConfig = axios.create({ baseURL, timeout });

// Default export
export default axiosConfig;
