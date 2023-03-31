import { useState, useEffect } from "react"

const App = () => {

  const [isFlipped, setIsFlipped] = useState(false)
  const [quizs, setQuizs] = useState<any>([])

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const res = fetch('https://opentdb.com/api.php?amount=16').then(res => res.json())
    setQuizs(res)
  })

  console.log(quizs)

  return (
    <div>
      <h1>1</h1>
    </div>
  )
}

export default App
