import "../blocks/page.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
