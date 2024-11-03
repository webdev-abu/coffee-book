import toast from "react-hot-toast";

//get all coffees from the local storage
const getAllFavorite = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    const allFavorite = JSON.parse(favorites);
    return allFavorite;
  } else {
    return [];
  }
};

// Add a Coffee to Local Storage
const addFavorite = (coffee) => {
  console.log(coffee);
  const favorite = getAllFavorite();
  const isExist = favorite.find((item) => item.id == coffee.id);
  if (isExist) {
    return toast.error("Coffee already exists !");
  }
  const newFavorite = [...favorite, coffee];
  localStorage.setItem("favorites", JSON.stringify(newFavorite));
  //   favorite.push(coffee);
  //   localStorage.setItem("favorites", JSON.stringify(favorite));
  toast.success("Coffee added to favorites");
};
// Remove a coffee from local storage

const removeFavorite = (id) => {
  const favorite = getAllFavorite();
  const remaining = favorite.filter((coffee) => coffee.id != id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
  toast.success("Coffee removed from favorites");
};

export { addFavorite, getAllFavorite, removeFavorite };
