import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

/* this is a reusable component desinged to define the styles */
/* 
Performance: using on load styles sometimes reduces the loading time of the page.
Some of the styles will be used only once throughout the application, 
such styles can be applied dynamically 
*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 2rem 6rem;
  padding: 1rem;
`;

export const ImgStyles = styled.img`
  height: '64px';
  width: '64px';
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
`;

export const LeftLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #dcf2dc;
  width: 50%;
  padding: 4em;
  color: black;
  font-family: fantasy;
  font-size: xx-large;
  font-weight: bolder;
  a {
    padding: 1em;
  }
`;

export const FormLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
  a {
    background-color: #dcf2dc;
    text-decoration: auto;
    padding: 1em;
    text-align: center;
    color: black;
    font-family: fantasy;
    font-size: xx-large;
    font-weight: bolder;
    border-radius: 40px;
  }
`;

export const ContentTrack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 4rem;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    padding-bottom: 2em;
  }
`;

export const HomeButton = styled.button`
  background-color: #dcf2dc;
  border-radius: 1em;
  height: 2em;
  border: none;
  cursor: pointer;
`;
