import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../components/UseAuth';
import TrackSearchResult from '../components/TrackSearchResult';
import SpotifyWebApi from 'spotify-web-api-node';
import styled from 'styled-components';
import { Wrapper } from '../components/PageLayout';

const spotifyApi = new SpotifyWebApi({
  clientId: '30111fde9fdd44c39c9160fd92f0b73e',
});

const GridLook = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

/* 
This is the Home page.
Displayed on user login.
user can search for songs/artist
 */
function Home({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  function chooseTrack(track) {
    navigate('/carddetails', { state: { track } });
  };

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    spotifyApi.searchTracks(search).then(res => {
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
            preview: track.preview_url,
            poster: track.album.images[0],
          };
        })
      )
    });

  }, [search, accessToken]);

  return (
    <Wrapper>
      <input
        type='search'
        placeholder='Search Songs/Artists'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <GridLook >
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {search && searchResults.length === 0 && (
          <div className='text-center' style={{ whiteSpace: 'pre' }}>
            no result found
          </div>
        )}
      </GridLook>
    </Wrapper>
  )
}

export default Home;