import React from 'react';
import styled from 'styled-components';
import { ImgStyles } from './PageLayout';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

/* 
  Reusable component 
  load the data in desired format
*/
export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    chooseTrack(track);
  };

  return (
    <Wrapper
      style={{ cursor: 'pointer' }}
      onClick={handlePlay}
    >
      <ImgStyles src={track.albumUrl} alt='icon' />
      <div className='ml-3'>
        <div>{track.title}</div>
        <div className='text-muted'>{track.artist}</div>
      </div>
    </Wrapper>
  )
}