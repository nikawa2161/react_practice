import { FC } from "react";

// type宣言
type Props = {
  memos: string[];
  onClickDelete: (index: number) => void;
};
// コンポーネントの型定義。
export const MemoList:FC<Props> = props => {
  const {memos, onClickDelete} = props;

  return (
    <ul className="memo-list">
      {/* map関数の第二引数はindexが入る */}
      {memos.map((memo, index) => (
        <li key={memo}>
          <div className="memo-wrap">
            <p>{memo}</p>
            <button
              className="memo-btn"
              onClick={() => onClickDelete(index)}
            >
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}