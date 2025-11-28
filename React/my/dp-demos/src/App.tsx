import Left from "./components/Left"
import Right from "./components/Right"
import SplitScreen from "./components/SplitScreen"


const App = () => {
  return (

    // Layout component 
    <SplitScreen leftWeight={15} rightWeight={80}>
      <Left/>
      <Right/>
    </SplitScreen>
  )
}

export default App