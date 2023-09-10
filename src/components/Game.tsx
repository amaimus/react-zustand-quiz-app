import { IconButton, Stack, List, Card, Typography, ListItem, ListItemButton, ListItemText} from '@mui/material'
import { useQuestionsStore } from '../store/questions'
import { type Question as QuestionType } from '../types'
import SyntaxHighLighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Question ({info} : {info: QuestionType}) {
  return (
    <Card variant='outlined' sx={{textAlign: 'left', padding: 2, marginTop: 4}}>
      <Typography variant='h5'>
        {info.question}
      </Typography>
      <SyntaxHighLighter
        language='javascript'
        style={gradientDark}
      >
        {info.code}
      </SyntaxHighLighter>

      <List sx={{bgcolor: '#e5e5e5'}} disablePadding>
        {
          info.answers.map((answer, index) => (
            <ListItem key={index} disablePadding divider>
              <ListItemButton>
                <ListItemText primary={answer} sx={{textAlign: 'center'}}/>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
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