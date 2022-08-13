import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ContentTrack, ContentText, HomeButton } from '../components/PageLayout'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  justify-content: center;
`;

/* 
This displays the page with details of the selected track/album
*/
function CardDetails() {
  const { state } = useLocation();
  const track = state.track;
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <img src={track.poster.url} alt='poster' />
      <ContentTrack>
        <HomeButton onClick={() => { redirectHome() }}>Home</HomeButton>
        <ContentText>
          <div>{track.title}</div>
          <div className='text-muted'>{track.artist}</div>
          {track.preview ?
            <iframe src={track.preview}
              allow='autoplay; encrypted-media'
              title='video'
            />
            : <div>Preview is not available</div>
          }
        </ContentText>
      </ContentTrack>
    </Wrapper>
  );
};

export default CardDetails;