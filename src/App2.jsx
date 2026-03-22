import React from 'react'

const App2 = () => {

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count badal gaya hai: ${count}`);
  document.title = `Clicks: ${count}`;
}, [count]); 
  return (
    <div>
      
    </div>
  )
}

export default App2
