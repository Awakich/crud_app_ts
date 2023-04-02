import { FC, useState } from 'react'
import { QuizItem } from '../models'
import ReactCardFlip from 'react-card-flip'

const QuizInfo: FC<QuizItem> = ({ category, correct_answer, difficulty, incorrect_answers, question }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerClassName='h-full'>

            <div onClick={handleClick} className='border p-3 rounded-xl hover:opacity-80 cursor-pointer space-y-3 flex flex-col min-h-full'>
                <h2 className='text-xl'>{question}</h2>

                <p className='italic font-semibold'>{category} | {difficulty}</p>

                <hr className='opacity-50 w-1/2 ' />

                <div className='space-y-1'>
                    <p>{correct_answer}</p>

                    {incorrect_answers.map((item) => (

                        <div className="flex">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

            </div>

            <div className='border p-3 rounded-xl hover:opacity-80 cursor-pointer min-h-full flex justify-center items-center' onClick={handleClick}>
                <p className='text-xl font-semibold'><span className='font-light'>Correct answer is </span>{correct_answer}</p>
            </div>

        </ReactCardFlip>
    )
}

export default QuizInfo