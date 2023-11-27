import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInfo } from './infoSlice';

export function Info() {
  const inf = useSelector((state) => state.info.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Get info"
          onClick={() => dispatch(getInfo())}
        >
          Get info
        </button>
      </div>
    </div>
  )
}