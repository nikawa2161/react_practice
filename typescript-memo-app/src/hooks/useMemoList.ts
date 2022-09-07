import { useDispatch } from "react-redux";
import { addPost, deletePost } from "../reducers/Memos";

export const useMemoList = () => {

  const dispatch = useDispatch();

  const addMemo = (text: string) => {
    dispatch(
      addPost(text)
    );
  };

  const deleteMemo = (index: number): void => {
      dispatch(deletePost(index));
    };

  return { addMemo, deleteMemo };
}