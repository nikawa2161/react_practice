import { ChangeEvent, FC, useCallback, useState } from 'react';
import '../App.css';
import { MemoList } from "./MemoList"
import { useMemoList } from '../hooks/useMemoList';
import { useSelector } from 'react-redux';

// react v.18 型定義FCでOK。暗黙的にchildren追加。
export const App: FC = () => {

  const { addMemo, deleteMemo } = useMemoList();
  // stateはgenerics
  const [text, setText] = useState<string>("");
  const memos = useSelector((state: any) => state.memos.value);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = () => {
    addMemo(text);
    setText("");
  }
  const onClickDelete = useCallback((index: number): void => {
    deleteMemo(index);
  },[deleteMemo])

  return (
    <div className="App">
      <h1>メモアプリ</h1>
      <input
        className="input-area"
        type="text"
        value={text}
        onChange={onChangeText}
      />
      <button className="add-btn" onClick={onClickAdd}>
        追加
      </button>
      <div className="memo">
        <p className="memo-title">メモリスト</p>
        <MemoList memos={memos} onClickDelete={onClickDelete} />
      </div>
    </div>
  );
}