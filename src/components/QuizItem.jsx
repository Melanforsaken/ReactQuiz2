function QuizItem({title, answers, selectionIndex, setSelectionIndex, onSubmit}) {

    return (
        <>
            <h2> {title} </h2>
            <div>
                {answers.map((answer, index) => (
                    <>
                        <div className="list-group">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a key={answer.text} href="#" onClick={() => setSelectionIndex(index)}
                               className={selectionIndex === index ? "list-group-item active" : "list-group-item"}>{answer.text}</a>
                            <br/>
                        </div>
                    </>
                ))}
                <button onClick={() => onSubmit()}>volgende</button>
            </div>
        </>
    )
}

export default QuizItem;