import * as React from 'react';
import styled from 'styled-components';

export interface IProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}
export const QuestionCard = (props: IProps) => {
    return (
        <StyleWrapper>
            <p className="number">
                Question: {props.questionNum} / {props.totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: props.question }} />
            <div>
                {props.answers && props.answers.map(answer => (
                    <div className="answerQuestions" key={answer}>
                        <button disabled={props.userAnswer} value={answer} onClick={props.callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </StyleWrapper>
    );
};

const StyleWrapper = styled.div`
    .answerQuestions {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: linear-gradient(90deg, #56ccff, #6eafb4);
        border: 3px solid #fff;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0,0,0,0.25); 
    }

    button, input, select, textarea {
        background: transparent;
        color: #2f3542;
        font-size: x-large;
        border: none;
    }
`;