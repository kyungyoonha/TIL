import React, { useState, useRef, useEffect } from "react";
import Lottoball from "./Lottoball";

function getWinNumbers() {
return [...winNumbers, bonusNumber];
}
const Lotto = () => {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers());
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);
useEffect(()=>{
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
 timeouts.current[i] = setTimeout(() => { //여기선 timeouts.current의 요소 값을 대입해주는것이기때문에 바뀌는게 아님. 
        setWinBalls((prevWinBalls) => {
          [...prevWinBalls, winNumbers[i]];
        });
      }, (i + 1) * 1000);
    }
 timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);

    return () => {timeouts.current.forEach((v)=>{clearTimeout(v)})}

  }, [timeouts.current]); // timeouts.current 자체가 바뀌는 때는 redo버튼 눌렀을때.

  const onClickRedo = () => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  };
componentDidMount() {
    this.runTimeouts();
  }
 });
  }
return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Lottoball key={v} number={v} />
        ))}
      </div>
      <div>보너스</div>
      {bonus && <Lottoball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더!</button>}
    </>
  );
};


export default Lotto;