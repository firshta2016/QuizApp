import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { QuestionCard } from './QuestionCard';
import { fetchSports } from '../API';
//types
import { QuestionsState, Difficulty } from '../API';

const TOTAL_QUESTIONS = 10;

export interface IAnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export const Sports = () => {
    const [ loading, setLoading ] = React.useState(false);
    const [ questions, setQuestions ] = React.useState<QuestionsState[]>([]);
    const [ number, setNumber ] = React.useState(0);
    const [ userAnswers, setUserAnswers ] = React.useState<IAnswerObject[]>([]);
    const [ score, setScore ] = React.useState(0);
    const [ gameOver, setGameOver ] = React.useState(true);
      
    const history = useHistory();

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchSports(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;
            //check anwer against correct asswer
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore(prev => prev + 1)
            //save answer in the array for the user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers((prev) => [...prev, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        //if we are on the last question
        if (nextQuestion === TOTAL_QUESTIONS) {
            //game is over
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

    return (
       
            <div className="container">
                { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>Start</button>
                ) : null }
                
                { !gameOver ? <p className="score">Score: {score} </p> : null }
                { loading && <p>Loading Questions ...</p> } 
                { !loading && !gameOver && (
                    <QuestionCard 
                    questionNum={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers = {questions[number].answers}
                    userAnswer = {userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
                )}
                {!gameOver && 
                !loading && 
                userAnswers.length === number + 1 && 
                number !== TOTAL_QUESTIONS - 1 ? ( 
                <button className="next" onClick={nextQuestion}>
                    Next Question
                </button>
                ) : null}
               
            <div className="back-button">
                <button onClick={() => history.goBack()}>Home Page</button>
            </div> 
        </div>
    );
};



