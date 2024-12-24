import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What does MERN stand for?',
    options: ['MongoDB, Express, React, Node', 'MySQL, Express, React, Node', 'MongoDB, Electron, React, Node', 'MongoDB, Express, Redux, Node'],
    answer: 'MongoDB, Express, React, Node'
  },
  {
    question: 'Which of the following is a NoSQL database used in MERN stack?',
    options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    answer: 'MongoDB'
  },
  {
    question: 'Which component in the MERN stack is responsible for handling HTTP requests?',
    options: ['React', 'Express', 'Node.js', 'MongoDB'],
    answer: 'Express'
  },
  {
    question: 'What is the purpose of React in the MERN stack?',
    options: ['To manage server-side logic', 'To create dynamic user interfaces', 'To store data', 'To handle HTTP requests'],
    answer: 'To create dynamic user interfaces'
  },
  {
    question: 'Which language is used to write backend code in the MERN stack?',
    options: ['Python', 'Java', 'JavaScript', 'PHP'],
    answer: 'JavaScript'
  },
  {
    question: 'Which of the following is used to run JavaScript on the server side?',
    options: ['Node.js', 'React', 'Express', 'MongoDB'],
    answer: 'Node.js'
  },
  {
    question: 'In MERN stack, which component is used to define API endpoints?',
    options: ['MongoDB', 'Express', 'React', 'Node.js'],
    answer: 'Express'
  },
  {
    question: 'Which of the following best describes MongoDB?',
    options: ['Relational Database', 'Document-based NoSQL database', 'Graph Database', 'Key-Value Store'],
    answer: 'Document-based NoSQL database'
  },
  {
    question: 'How is data typically passed from MongoDB to React in a MERN application?',
    options: ['Directly through React components', 'Via Express and Node.js', 'Through Redux store', 'By importing data in React'],
    answer: 'Via Express and Node.js'
  },
  {
    question: 'What command is used to start a React application?',
    options: ['npm start', 'node app.js', 'mongod', 'express run'],
    answer: 'npm start'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResult(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
          <h3>Correct Answers:</h3>
          <ul>
            {questions.map((q, index) => (
              <li key={index}><strong>{q.question}</strong> - {q.answer}</li>
            ))}
          </ul>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={selectedAnswer === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleSubmit} disabled={!selectedAnswer}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
