import React from 'react'

const Results = ({ score, totalQuestionNum, restartQuiz }) => {
    return (
        <div>
            <h2>Kết Quả</h2>
            <p> bạn trả lời đúng {score}/{totalQuestionNum} câu 🤗🤗</p>
            <div className="resultButtonsContainer">
                <button className='result-button'>Xem lại</button>
                <button className='result-button' onClick={restartQuiz}>làm lại</button>
            </div>
        </div>
    )
}

export default Results
