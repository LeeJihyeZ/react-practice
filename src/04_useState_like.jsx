import { useState } from 'react';

function Like() {
    const [like, setLike] = useState(false);
    
    return (
        <div>
            <button onClick={() => setLike(!like)}>{like ? '좋아요 취소' : '좋아요'}</button>
            <p>좋아요 개수 {Number(like)} 개</p>
        </div>
    )
}

export default Like;