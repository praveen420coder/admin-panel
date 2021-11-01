/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { categoryConstansts } from "../actions/constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        type: category.type,
        childern: [],
      },
    ];
  }

  for (let cat of categories) {
    if (cat._id == parentId) {
      // const newCategory = {
      //   _id: category._id,
      //   name: category.name,
      //   slug: category.slug,
      //   parentId: category.parentId,
      //   type: category.type,
      //   childern: [],
      // };
      myCategories.push({
        ...cat,
        childern: cat.childern
          ? buildNewCategories(
              parentId,
              [
                ...cat.childern,
                {
                  _id: category._id,
                  name: category.name,
                  slug: category.slug,
                  parentId: category.parentId,
                  type: category.type,
                  childern: category.childern,
                },
              ],
              category
            )
          : [],
      });
    } else {
      myCategories.push({
        ...cat,
        childern: cat.childern
          ? buildNewCategories(parentId, cat.childern, category)
          : [],
      });
    }
  }

  return myCategories;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoryConstansts.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstansts.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );
      console.log("updated categoires", updatedCategories);

      state = {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
      break;
    case categoryConstansts.ADD_NEW_CATEGORY_FAILURE:
      state = {
        ...initialState,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
