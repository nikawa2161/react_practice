import { ChangeEvent, FC, useCallback, useState } from 'react';
import '../App.css';
import { MemoList } from "./MemoList"

// react v.18 型定義FCでOK。暗黙的にchildren追加。
export const App: FC = () => {
  // stateはgenerics
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onClickAdd = () => {
    // 現在のメモリストの配列生成
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    setText("");
  }

  // 関数再生成でのレンダリング防止
  // voidでreturnの記述がないことを明示。記述しなくても自動的にvoidになる。
  const onClickDelete = useCallback((index: number): void => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  },[memos])

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