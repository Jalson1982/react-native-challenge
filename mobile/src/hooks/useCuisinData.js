import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../store";
import { fetchCuisines } from "../services/getCuisines";

const useCuisinesData = () => {
  const dispatch = useDispatch();
  const { data, parentIds } = useSelector((state) => state.cuisines);

  useEffect(() => {
    dispatch(fetchCuisines());
  }, [dispatch]);

  const selectCategoryHandler = (category) => {
    dispatch(selectCategory({ category }));
  };

  const { firstRowData, secondRowData } = useMemo(() => {
    const currentParentId = parentIds[parentIds.length - 1]?.id ?? null;
    const filteredData = data.filter(
      (item) => item.parentId === currentParentId
    );

    if (filteredData.length === 0)
      return { firstRowData: [], secondRowData: [] };
    if (filteredData.length <= 2)
      return { firstRowData: filteredData, secondRowData: [] };

    const firstRowData = [];
    const secondRowData = [];

    filteredData.forEach((item, index) => {
      (index % 2 === 0 ? firstRowData : secondRowData).push(item);
    });

    return { firstRowData, secondRowData };
  }, [data, parentIds]);

  return { firstRowData, secondRowData, selectCategoryHandler };
};

export default useCuisinesData;
