import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../store";
import { fetchCuisines } from "../services/getCuisines";

const useCuisinesData = () => {
  const dispatch = useDispatch();
  const { data, parentIds } = useSelector((state) => state.cuisines);

  useEffect(() => {
    dispatch(fetchCuisines());
  }, [dispatch]);

  const selectCategoryHandler = useCallback(
    (category) => {
      dispatch(selectCategory({ category }));
    },
    [dispatch]
  );

  const { firstRowData, secondRowData } = useMemo(() => {
    const currentParentId = parentIds[parentIds.length - 1]?.id ?? null;
    const filteredData = data.filter(
      (item) => item.parentId === currentParentId
    );

    if (filteredData.length === 0) {
      return { firstRowData: [], secondRowData: [] };
    }

    const firstRowData = [];
    const secondRowData = [];

    filteredData.forEach((item, index) => {
      if (index % 2 === 0) {
        firstRowData.push(item);
      } else {
        secondRowData.push(item);
      }
    });

    return { firstRowData, secondRowData };
  }, [data, parentIds]);

  return { firstRowData, secondRowData, selectCategoryHandler };
};

export default useCuisinesData;
