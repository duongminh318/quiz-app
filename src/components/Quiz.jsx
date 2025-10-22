
//  phím tắt tạo nhanh component ctrl+ space , rafce
import React, { useEffect, useState } from 'react'
import Results from './Results';

const quizData = [
    {
        question: "Biến nào sau đây là hợp lệ trong JavaScript?",
        options: ["1variable", "_variable", "var-name", "var name"],
        answer: "_variable",
    },
    {
        question:
            "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
        options: ["object", "array", "string", "function"],
        answer: "string",
    },
    {
        question:
            "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
        options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
        answer: "Merge Sort",
    },
    {
        question: "Kết quả của `typeof null` trong JavaScript là gì?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: "'object'",
    },
    {
        question: "Bộ nhớ Stack dùng để làm gì?",
        options: [
            "Lưu trữ dữ liệu dạng hàng đợi",
            "Lưu trữ các lời gọi hàm (function calls)",
            "Lưu ảnh",
            "Lưu video",
        ],
        answer: "Lưu trữ các lời gọi hàm (function calls)",
    },
    {
        question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
        options: ["==", "===", "!=", "="],
        answer: "===",
    },
    {
        question: "JSON là viết tắt của gì?",
        options: [
            "Java Syntax Object Notation",
            "JavaScript Object Notation",
            "JavaScript Online Network",
            "Java Server Object Notation",
        ],
        answer: "JavaScript Object Notation",
    },
    {
        question:
            "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
        options: ["Stack", "Queue", "Array", "Linked List"],
        answer: "Queue",
    },
    {
        question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
        options: ["print()", "console.log()", "echo()", "show()"],
        answer: "console.log()",
    },
    {
        question: "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
        options: ["null", "0", "undefined", "false"],
        answer: "undefined",
    },
    {
        question: "HTML là gì?",
        options: [
            "Ngôn ngữ lập trình để xử lý logic",
            "Ngôn ngữ đánh dấu để tạo cấu trúc website",
            "Framework của JavaScript",
            "Trình duyệt web",
        ],
        answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
    },
    {
        question: "Trong thuật toán, Big O dùng để đo gì?",
        options: [
            "Tốc độ mạng",
            "Thời gian load ảnh",
            "Độ phức tạp của thuật toán",
            "Dung lượng RAM máy tính",
        ],
        answer: "Độ phức tạp của thuật toán",
    },
];

const Quiz = () => {
    // useState lấy ra đáp án đã chọn
    const [optionSelected, setOptionSelected] = useState("")

    // 1 state dạng mảng để lưu các câu trả lời lại
    // Khai báo state userAnswers và hàm cập nhật setUserAnswers
    // useState(...) khởi tạo giá trị ban đầu cho state

    const [userAnswers, setUserAnswers] = useState(
        // Tạo ra một mảng mới có độ dài bằng số lượng câu hỏi trong quizData
        Array.from({ length: quizData.length })
        // 👉 Ví dụ: nếu quizData.length = 5 thì mảng này là:
        // [undefined, undefined, undefined, undefined, undefined]
        // Tức là ban đầu người dùng chưa chọn đáp án nào cả
    );

    // state để lưu câu đang trả lời
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // state để lưu cờ kết thúc
    const [isQuizEnded, setisQuizEnded] = useState(false);

    //state để lưu giá trị của điểm
    const [score, setScore] = useState(0);


    // hàm chạy khi chọn đáp án
    const handleSelectedOption = (option, index) => {
        setOptionSelected(option);

        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = index;
        setUserAnswers(newUserAnswers);
    };

    const goNext = () => {
        if (currentQuestion === quizData.length - 1) {

            setisQuizEnded(true);

        } else {
            setCurrentQuestion((prev) => prev + 1);
        }


    };

    const goBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);

        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setisQuizEnded(false);
        setOptionSelected("");
        setScore(0);
        setUserAnswers(Array.from({ length: quizData.length }));
    };
    useEffect(() => {
        // Lấy chỉ số (index) của đáp án mà người dùng đã chọn cho câu hiện tại
        // userAnswers là mảng, mỗi phần tử tương ứng với 1 câu hỏi
        // Ví dụ: userAnswers = [2, 0, 1] → nghĩa là:
        // - Câu 1 chọn option thứ 3
        // - Câu 2 chọn option thứ 1
        // - Câu 3 chọn option thứ 2
        const answer = Number(userAnswers[currentQuestion]);

        // Lấy ra nội dung (text) của đáp án mà người dùng đã chọn
        // quizData[currentQuestion] → truy cập vào câu hỏi hiện tại
        // .options → mảng các lựa chọn của câu hỏi đó
        // [answer] → lấy ra phần tử theo chỉ số đã chọn ở trên
        const pastOptionSelected = quizData[currentQuestion].options[answer];

        // 👉 Ví dụ cụ thể:
        // quizData[currentQuestion].options = ["A. Hà Nội", "B. TP.HCM", "C. Đà Nẵng"];
        // userAnswers[currentQuestion] = 1
        // → answer = 1
        // → pastOptionSelected = "B. TP.HCM"

        if (answer !== undefined) {
            setOptionSelected(pastOptionSelected);
        } else {
            setOptionSelected("");
        }

    }, [currentQuestion, userAnswers]);

    useEffect(() => {
        if (optionSelected === quizData[currentQuestion].answer) {
            setScore((prev) => prev + 1)
        }
    }, [optionSelected]);


    if (isQuizEnded) {
        return <Results 
        score={score} 
        totalQuestionNum={quizData.length} 
        restartQuiz={restartQuiz} />
    }



    return (
        <div>
            <h2>Câu {currentQuestion + 1}</h2>
            <p className='question'>{quizData[currentQuestion].question}</p>


            {quizData[currentQuestion].options.map((option, index) => (
                <button
                    // className có điều kiện:
                    // Nếu người dùng đã chọn đáp án này (optionSelected === option)
                    // thì thêm class "selected" để đổi màu hoặc style khác.
                    className={`option ${optionSelected === option ? "selected" : ""}`}

                    // disabled: nếu người dùng đã chọn một đáp án rồi,
                    // thì các nút còn lại sẽ bị vô hiệu hóa (không bấm được)
                    // !!optionSelected => true nếu đã chọn
                    // && optionSelected !== option => chỉ disable những nút KHÁC với nút đã chọn
                    //disabled = (đã chọn đáp án nào đó) && (đáp án hiện tại KHÔNG phải đáp án đã chọn)

                    disabled={!!optionSelected && optionSelected !== option}

                    // Khi người dùng bấm nút, gọi hàm handleSelectedOption(option, index)
                    // để xử lý logic chọn đáp án (lưu state, chấm điểm, v.v.)
                    onClick={() => handleSelectedOption(option, index)}

                    // key: khóa duy nhất cho mỗi phần tử trong .map() (React yêu cầu)
                    key={option}
                >
                    {/* Hiển thị nội dung của đáp án lên nút */}
                    {option}
                </button>
            ))}


            {
                optionSelected ? (optionSelected === quizData[currentQuestion].answer ? (
                    <p className='correct-answer'>câu trả lời của bạn chính xác</p>
                ) : (
                    <p className='incorrect-answer'>câu trả lời của bạn sai rồi</p>
                )) : ("")
            }
            <p> đáp án bạn đã chọn: {optionSelected}</p>

            <div className='nav-buttons'>

                {/* Nút quay lại */}
                <button
                    onClick={goBack}                     // Khi bấm → gọi hàm goBack (về câu trước)
                    disabled={currentQuestion === 0}     // Nếu đang ở câu đầu tiên (index 0) → disable nút
                >
                    Quay lại
                </button>

                {/* Nút kế tiếp */}
                <button
                    onClick={goNext}                     // Khi bấm → gọi hàm goNext (qua câu kế)
                    disabled={!optionSelected}           // Nếu chưa chọn đáp án nào → disable nút

                >
                    {currentQuestion === quizData.length - 1 ? "Hoành thành Quiz" : "Kế tiếp"}
                </button>

            </div>
        </div>
    )
}

export default Quiz
