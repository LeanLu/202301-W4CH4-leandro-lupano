import Actions from "../components/actions/actions";
import Info from "../components/info/info";
import Keyborad from "../components/keyboard/keyboard";

export default function HomePage() {
  return (
    <section>
      <h2>Home Page</h2>
      <Info></Info>
      <main className="phone">
        <Keyborad></Keyborad>
        <Actions></Actions>
      </main>
    </section>
  );
}
