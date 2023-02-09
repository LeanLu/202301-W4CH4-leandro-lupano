import { Actions } from "../components/actions/actions";
import { Info } from "../components/info/info";
import { Keyboard } from "../components/keyboard/keyboard";

export default function HomePage() {
  return (
    <section>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </section>
  );
}
