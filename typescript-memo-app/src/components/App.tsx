import { ChangeEvent, FC, useState } from 'react';
import '../App.css';

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
  
  const onClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }

  return (
    <div className="App">
        <h1>メモアプリ</h1>
        <input className='input-area' type="text" value={text} onChange={onChangeText} />
        <button className='add-btn' onClick={onClickAdd}>追加</button>
        <div className="memo">
          <p className="memo-title">メモリスト</p>
          <ul className='memo-list'>
            {/* map関数の第二引数はindexが入る */}
            {memos.map((memo, index) => (
              <li key={memo}>
                <div className='memo-wrap'>
                  <p>{memo}</p>
                  <button className='memo-btn' onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}