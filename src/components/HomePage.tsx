import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Routes } from '../App';

export const HomePage = () => {
   const history = useHistory();
      
    return (
        <StyleWrapper>
            <div className="container">
                <div className="row title">
                    <h1><span>Q</span>uiz</h1>
                </div>
                <div className="row sub-title">
                    Choose Your Category From Below 
                </div>
                <div className="choices">
                    <button className="books-button" type="button" onClick={() => history.push(Routes.Books)}>Books</button>
                    <button className="computers-button" type="button" onClick={() => history.push(Routes.Computers)}>Computers</button>
                    <button className="movies-button" type="button" onClick={() => history.push(Routes.Movies)}>Movies</button>
                    <button className="sports-button" type="button" onClick={() => history.push(Routes.Sports)}>Sports</button>
                </div>
            </div>
        </StyleWrapper> 
    );
};

const StyleWrapper = styled.div`
.container {
    .choices {
      display: flex;
      flex-wrap: wrap;
      margin: 3rem auto 3rem;
      width: 500px;

      button {
        flex: 1 0 45%;
        width: 200px;
        height: 80px;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        margin: .4rem;
        outline: none;
        user-select: none;
        font-weight: 600;

        &:hover {
          background: #D6D3D2;
          transition: .5s;
        }
        &:active {
          transform: scale(.9);
          transition: transform .1s;
        }
      
        p {
          font-size: 1.3rem;
          margin: 0;
        }
      }
    }
    h1 {
        text-transform: uppercase;
        font-size: 3rem;

    span, i {
        color: #ffa502;
      }
    }
    .title {
        text-transform: uppercase;
        font-size: 3rem;
    }
   
    .celebrities {
        margin: 0 0 0 60px;
    }
    .books-button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .computers-button {
        background-color: #e65727; /* Orange */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px; 
    }
    .movies-button {
        background-color: #21b3db; /* Blue */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .sports-button {
        background-color: #8f2b86; /* Purple */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
`;

