import axios from 'axios';

const API_KEY = process.env.API_KEY;

export const getUsers = async (req, res) => {
  try {
    const response = await axios.get('https://reqres.in/api/users', {
      headers: {
        'x-api-key': API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при запросе:', error.message);
    console.error('Полный ответ:', error.response?.data || error.toJSON?.() || error);
    res.status(500).json({ error: 'Не удалось получить пользователей' });
  }
};
