import  { useState, useEffect } from "react";
import QuizStart from "../../components/quizCard/QuizStart";
import QuizQuestion from "../../components/quizCard/QuizQuestion";
import QuizResults from "../../components/quizCard/QuizResult";
import { type Question, type Answer } from "../../types/quiz";

import style from '../../styles/quiz/quiz.module.css'

const QUIZ_API_URL = "https://opentdb.com/api.php?amount=7&type=multiple&encode=url3986";

export default function QuizApp() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Fetch questions when quiz starts
  useEffect(() => {
    if (quizStarted) {
      fetch(QUIZ_API_URL)
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.results.map((q: any) => {
            const options = [
              ...q.incorrect_answers,
              q.correct_answer,
            ].map((opt) => decodeURIComponent(opt));
            
            // Shuffle options
            for (let i = options.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [options[i], options[j]] = [options[j], options[i]];
            }
            
            return {
              question: decodeURIComponent(q.question),
              options,
              correct: decodeURIComponent(q.correct_answer),
            };
          });
          setQuestions(formatted);
          setCurrentQIndex(0);
          setAnswers([]);
          setQuizFinished(false);
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          alert("Failed to fetch quiz questions. Please try again.");
          setQuizStarted(false);
        });
    }
  }, [quizStarted]);

  function handleStart() {
    setQuizStarted(true);
  }

  function handleAnswerSubmit(answer: Answer) {
    setAnswers((prev) => [...prev, answer]);

    if (currentQIndex + 1 === questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentQIndex((i) => i + 1);
    }
  }

  function handleRestart() {
    setQuizStarted(false);
    setQuestions([]);
    setAnswers([]);
    setQuizFinished(false);
  }

  if (!quizStarted) {
    return <QuizStart onStart={handleStart} />;
  }

  if (quizFinished) {
    return <QuizResults answers={answers} onRestart={handleRestart} />;
  }

  if (questions.length === 0) {
    return (
      <div className={style.container}>
        <h1>Loading Questions...</h1>
      </div>
    );
  }

  return (
    <QuizQuestion
      question={questions[currentQIndex]}
      questionNumber={currentQIndex + 1}
      totalQuestions={questions.length}
      onSubmitAnswer={handleAnswerSubmit}
    />
  );
}

