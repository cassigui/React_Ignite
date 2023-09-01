import styles from "./Post.module.css";
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img src="https://github.com/cassigui.png" />
          <div className={styles.authorInfo}>
            <strong>Cassiano Guilherme</strong>
            <span>Web-developer</span>
          </div>
        </div>

        <time title="30 de agosto de 2023" dateTime='2023-08-30 13:41:20'>Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portfólio.</p>

        <p><a href=''>portfoliocassiano.netlify.app</a></p>

        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentario'
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )

}