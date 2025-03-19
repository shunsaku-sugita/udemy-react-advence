import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onChangeOpen = () => setOpen(!open);

  // useCallbackは関数をメモ化するためのフック
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemoは値をメモ化するためのフック
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onChangeOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
