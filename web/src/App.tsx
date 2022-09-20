interface buttonProps{
 title: string;
}

function Button(props: buttonProps){
return(
<button>
 {props.title}
</button>
)
}
function App() {
  return (
  <div>
<Button title="Send 1"/>
<Button title="Send 2"/>
<Button title="Send 3"/>
<Button title="Hello word"/>

  </div>
  
  )
  
}
export default App
