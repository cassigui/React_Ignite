import { Post } from "./Post";
import { Header } from './components/Header';
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Cassiano Guilherme"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iste blanditiis suscipit, esse est unde illo nulla voluptatum labore, et fuga consectetur hic id voluptatibus obcaecati quo, iure quasi tenetur!"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}

