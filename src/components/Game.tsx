import { IconButton, Stack, Card, Typography} from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { type Question as QuestionType } from '../types'
import SyntaxHighLighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Question ({info} : {info: QuestionType}) {
  return (
    <Card variant='outlined' sx={{textAlign: 'left', padding: 2}}>
      <Typography variant='h5'>
        {info.question}
      </Typography>
      <SyntaxHighLighter
        language='javascript'
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighLighter>
    </Card>
  )
}


export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo}/>
    </>
  )
}