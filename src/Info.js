import React, { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

{/* <button onClick={() => {
        setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />} */}

const Info = () => {
    //const [name, setName] = useState('');
    //const [nickname, setNickname] = useState('');

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value)
    // }

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target)
    }

    // useEffect(() => { //컴포넌트 화면에 맨 처음 렌더링될 때
    //     console.log('렌더링 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    // useEffect(() => {
    //     console.log('마운트 될 때만 실행됩니다.');
    // }, [])

    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => { // 업데이트 되기 전에 수행
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // }, [name])


    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default Info
