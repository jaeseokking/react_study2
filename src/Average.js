import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = number => {
    console.log('평균값 계산 중..');
    if (number.length === 0) return 0;
    const sum = number.reduce((a, b) => a + b);
    return sum / number.length;
};

function Average() {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, []); //컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]) //number 혹은 list가 바뀌었을 때만 함수 생성

    //list 값이 변경될 때만 실행하도록 설정
    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    )
}

export default Average
