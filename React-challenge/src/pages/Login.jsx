import React from 'react';
import { LoginWrapper, LeftLogin, FormLogin } from '../components/PageLayout'
import { SiLinkedin, SiSpotify, SiReact } from 'react-icons/si';

/* 
The URL for authenticaton from spotify with the unique client ID and redirect uri
*/
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=30111fde9fdd44c39c9160fd92f0b73e&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

/* 
The login page
*/
function Login() {
  return (
    <LoginWrapper>
      <LeftLogin>
        <div><SiReact />  React - Spotify  <SiSpotify /></div>
        <div>By LAKSHMI GR
          <a href="https://www.linkedin.com/in/lakshmi-gr-40040177/" target="_blank">
            <SiLinkedin /></a>
        </div>
      </LeftLogin>
      <FormLogin>
        <a href={AUTH_URL}>
          SIGNIN
        </a>
      </FormLogin>
    </LoginWrapper>
  );
};

export default Login;