import { Button } from "./components/ui/button"
import Sidebar from "./components/ui/sidebar"

function App() {
  return (
    <>
    <Sidebar />
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App
