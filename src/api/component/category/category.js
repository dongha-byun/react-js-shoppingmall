import { api } from "../../axios";

const CategoryService = {
    getCategories: async() => {
        let result = await api.get("/categories");
        return result.data.data;
    }
}

export default CategoryService;

export function getCategory(categories, categoryId){
    return categories.find(({ id }) => id == categoryId);
}

export function getSubCategories({ categories, categoryId, subCategoryId }) {
    return categories
      .find(({ id }) => id === categoryId)
      .subCategories.find(({ id }) => id == subCategoryId);
}