import { Link } from "react-router";
import styles from "../../styles/homepage/home.module.css";

const projects = [
  {
    title: "Todo App",
    image: "/images/todo.png", // put inside public/images/
    path: "/todolist",
  },
  {
    title: "Quiz App",
    image: "/images/quiz.png",
    path: "/quiz",
  },
  {
    title: "Stepper Form",
    image: "/images/stepper.png",
    path: "/stepper",
  },
];

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.heading}>Mini Projects</h1>
      <div className={styles.cardGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <Link to={project.path} className={styles.link}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <h2 className={styles.title}>{project.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
