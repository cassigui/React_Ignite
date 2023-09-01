import { ThumbsUp, Trash } from 'phosphor-react';
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>

      <img src="https://github.com/cassigui.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cassiano Guilherme</strong>
              <time title="30 de agosto de 2023" dateTime='2023-08-30 13:41:20'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Cassiano, parabéns!!</p>
        </div>
        <footer>
          <button><ThumbsUp /> Aplaudir <span> 20</span>
          </button>

        </footer>
      </div>

    </div>
  );
}