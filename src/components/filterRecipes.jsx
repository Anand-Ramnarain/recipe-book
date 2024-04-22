const filterRecipes = (recipes, filters = [], favoritesOnly = false) => {
  let filteredRecipes = recipes;

  // Apply dietary restriction filters. Goes throught each  recipe to filter the dietary
  if (filters.length > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      filters.every((filter) => recipe.dietaryRestrictions.includes(filter))
    );
  }

  // Apply favorite filter. Finds all recipes that is a favourite the one with a yellow star
  if (favoritesOnly) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.isFavorite);
  }

  return filteredRecipes;
};

export default filterRecipes;
