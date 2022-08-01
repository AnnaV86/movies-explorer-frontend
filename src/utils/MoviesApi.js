const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// Обработка ответа от сервера
const getResponse = (response) => {
  try {
    if (!response.ok) {
      throw new Error('Ошибка запроса');
    }
    return response.json();
  } catch (err) {
    return err;
  }
};

export const getMoviesListFetch = async () => {
  const response = await fetch(BASE_URL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return await getResponse(response);
};
