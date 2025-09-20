import { type Answer } from "../../types/quiz";
import style from '../../styles/quiz/quiz.module.css'


interface QuizResultsProps {
  answers: Answer[];
  onRestart: () => void;
}

export default function QuizResults({ answers, onRestart }: QuizResultsProps) {
  const correctCount = answers.filter((a) => a.selected === a.correct).length;
  const incorrectCount = answers.length - correctCount;

  return (
    <div className={style.container}>
  <h1>Quiz Results</h1>
  <div className={style.scoreSummary}>
    <div className={style.scoreItem}>
      <span className={style.scoreLabel}>Total Score:</span>
      <span className={style.scoreValue}>{correctCount} / {answers.length}</span>
    </div>
    <div className={`${style.scoreItem} ${style.scoreItemCorrect}`}>
      <span className={style.scoreLabel}>Correct Answers:</span>
      <span className={style.scoreValue}>{correctCount}</span>
    </div>
    <div className={`${style.scoreItem} ${style.scoreItemIncorrect}`}>
      <span className={style.scoreLabel}>Incorrect Answers:</span>
      <span className={style.scoreValue}>{incorrectCount}</span>
    </div>
  </div>
  
  <div className={style.resultList}>
    <h2>Question Breakdown</h2>
    {answers.map(({ question, selected, correct }, i) => {
      const isCorrect = selected === correct;
      return (
        <div
          key={i}
          className={`${style.resultItem} ${isCorrect ? style.resultItemCorrect : style.resultItemIncorrect}`}
        >
          <p className={style.resultQuestion}>{question}</p>
          <p className={style.resultAnswer}>
            Your answer:{" "}
            <span className={style.answerText}>
              {selected === null ? "No answer (timeout)" : selected}
            </span>
          </p>
          {!isCorrect && (
            <p className={style.resultCorrect}>
              Correct answer: <span className={style.correctText}>{correct}</span>
            </p>
          )}
        </div>
      );
    })}
  </div>
  
  <button className={style.restartBtn} onClick={onRestart}>
    Restart Quiz
  </button>
</div>

  );
}

