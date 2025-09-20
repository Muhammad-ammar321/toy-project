import { type Question, type Answer } from "../../types/quiz";
import { useState, useRef, useEffect } from "react";
import style from '../../styles/quiz/quiz.module.css'

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSubmitAnswer: (answer: Answer) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onSubmitAnswer,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setTimeLeft(20);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleTimeOut();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [question]);

  function handleTimeOut() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    onSubmitAnswer({
      selected: null,
      correct: question.correct,
      question: question.question,
    });
  }

  function handleSelect(option: string) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
  }

  function handleSubmit() {
    if (selectedAnswer === null) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    onSubmitAnswer({
      selected: selectedAnswer,
      correct: question.correct,
      question: question.question,
    });
  }

  const isAnswered = selectedAnswer !== null;

  return (
    <div className={style.container}>
      <h1 className={style.quiz_h1}>React Quiz App</h1>
      <div className={style.timer}>Time Left: {timeLeft}s</div>
      <div className={style.questionSection}>
        <p className={style.questionNumber}>
          Question {questionNumber} / {totalQuestions}
        </p>
        <p className={style.questionText}>{question.question}</p>
        <div className={style.options}>
          {question.options.map((opt, i) => {
            const isSelected = selectedAnswer === opt;
            return (
              <button
                key={i}
                className={`${style.optionBtn} ${isSelected ? style.optionBtnSelected : ""}`}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      <div className={style.controls}>
        <button
          className={style.nextBtn}
          onClick={handleSubmit}
          disabled={!isAnswered}
        >
          {questionNumber === totalQuestions ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>

  );
}
