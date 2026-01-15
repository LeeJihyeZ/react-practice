import { useState } from 'react';

function Greeting() {
    const [name, setName] = useState('');

    return (
        <div>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
            />
            <p>안녕하세요, {name}님!</p>
        </div>
    )
}

export default Greeting;