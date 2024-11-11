import { getCatalog } from '../pages/api/catalog/catalog';

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const getItems = async () => {
  try {
    const response = await getCatalog();
    const data = response.data;
    console.log(data.clothes);
    return shuffle(data.clothes);
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export default getItems;
