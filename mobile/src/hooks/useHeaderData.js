import { useDispatch, useSelector } from "react-redux";
import { goBack, resetCategory } from "../store";

const useHeaderData = () => {
  const dispatch = useDispatch();
  const { parentIds } = useSelector((state) => state.cuisines);

  const title = parentIds[parentIds.length - 1]?.name ?? "Cuisines";

  const goBackHandler = () => {
    dispatch(goBack());
  };

  const backToHomeHandler = () => {
    dispatch(resetCategory());
  };
  return { title, parentIds, goBackHandler, backToHomeHandler };
};

export default useHeaderData;
