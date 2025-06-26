import {useState} from "react";
import QuizItem from "./QuizItem";
import questions from "../questions";

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(-1); // let questionIndex = 0 setQuestionIndex(questionIndex + 1);
    const [selectionIndex, setSelectionIndex] = useState(-1);
    const [score, setScore] = useState(0);

    function handleSubmit() {
        if (questions[questionIndex].options[selectionIndex].correct) {
            setScore(s => s + 1);
        }
        setSelectionIndex(-1);
        setQuestionIndex(q => q + 1);
    }

    return (
        <>
            {questionIndex === -1 &&
                (
                    <div style={{textAlign: 'center'}}>
                        <h2>Welkom bij de React Quiz!</h2>
                        <p>Deze quiz zal je basiskennis van React op de proef stellen. Na afloop van alle zes de vragen
                            zal
                            een eindresultaat volgen.</p>
                        <button onClick={() => setQuestionIndex(q => q + 1)} className="start-button">Starten.</button>
                    </div>
                )
            }
            {questionIndex >= 0 && <QuizItem title={questions[questionIndex].text} answers={questions[questionIndex].options} selectionIndex={selectionIndex} setSelectionIndex={setSelectionIndex} onSubmit={handleSubmit()}/> }
            {/*<button onClick={() => setQuestionIndex(q => q + 1)} className="start-button">Starten.</button>*/}
        </>
    )
}

export default Quiz;