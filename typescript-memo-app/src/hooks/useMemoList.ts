import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  const addMemo = useCallback((text: string) => {
    // 現在のメモリストの配列生成
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
  },[memos]);

  const deleteMemo = useCallback(
    (index: number): void => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },[memos]
  );

  return { memos, addMemo, deleteMemo };
}