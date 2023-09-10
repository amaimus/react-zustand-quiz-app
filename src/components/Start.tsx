import { Button } from '@mui/material';
import { useQuestionsStore } from '../store/questions';

const maxQuestions = 5

export function Start () {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
  
  return (
    <Button
      onClick={ () => {fetchQuestions(maxQuestions)}}
      variant='contained'
    >
      Start!
    </Button>
  )

}
