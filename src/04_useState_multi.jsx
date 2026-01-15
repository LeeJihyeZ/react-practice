import { useState } from 'react';

function UserProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isAdult, setIsAdult] = useState(false);

    const handleAgeChange = (e) => {
        const newAge = parseInt(e.target.value) || 0;
        setAge(newAge);
        setIsAdult(newAge >= 19);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름"
            />
            <input 
                type='number'
                value={age}
                onChange={handleAgeChange}
                placeholder='나이'
            />
            <p>{name}님은 {age}세이며, {isAdult ? '성인' : '미성년자'}입니다.</p>
        </div>
    )
}

export default UserProfile;