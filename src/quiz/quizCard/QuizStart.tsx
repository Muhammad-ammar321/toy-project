import style from '../../styles/quiz/quiz.module.css'

interface QuizStartProps {
  onStart: () => void;
}

export default function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className={style.container}>
      <h1>React Quiz App</h1>
      <p className={style.description}>
        Test your knowledge with this interactive quiz! You'll have 20 seconds per question.
      </p>
      <button className={style.startBtn} onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

