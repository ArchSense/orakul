import axios from 'axios';

const SERVER_URL = 'http://localhost:3100';
export const getSourceCode = async (fileId: string) => {
  const { data } = await axios.post(`${SERVER_URL}/source-code`, { fileId });
  return data;
}