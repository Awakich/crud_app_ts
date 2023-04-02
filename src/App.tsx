import { useState, useEffect, FC } from "react"
import { QuizItem } from '../models'
import QuizInfo from '../components/QuizInfo'

const App: FC = () => {

  const [quizs, setQuizs] = useState<QuizItem[]>([])

  const fetchData = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=20').then(res => res.json())
    setQuizs(res.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="pt-5 text-white">

      <div className="space-y-4 text-center text-[#232323] mb-10">
        <h1 className="text-8xl font-bold">QUIZ</h1>
        <h4 className="font-light text-xl italic">Test your brain</h4>
     </div>

      <div className="grid grid-cols-4 gap-10 bg-[#232323] px-12 py-6 rounded-t-3xl">
        {quizs.map(({ category, difficulty, question, correct_answer, incorrect_answers }, index) => (
          <div key={index}>
            <QuizInfo category={category} difficulty={difficulty} question={question} correct_answer={correct_answer} incorrect_answers={incorrect_answers} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default App
