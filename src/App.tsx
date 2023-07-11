import Calendar from "./components/Calendar";
import { Button } from "./ui";

function App() {
  return (
    <div className="px-4 py-5 flex flex-col gap-y-10">
      <div>
        <h3 className="font-medium mb-4 text-2xl">Calendar</h3>
        <Calendar />
      </div>

      <div>
        <h3 className="font-medium mb-4 text-2xl">Buttons</h3>
        <Button>Hello</Button>
      </div>
    </div>
  );
}

export default App;
