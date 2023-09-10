import { Button } from '@mui/material'
import { useQuestionsData } from '../hook/useQuestionsData'
import { useQuestionsStore } from '../store/questions'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionsData()
  const reset = useQuestionsStore(state => state.resetGame)
  return (
    <footer style={{marginTop: '16px'}}>
      <strong>{`
      ✅ ${correct} correct - 
      ❌ ${incorrect} incorrect - 
      ❓ ${unanswered} unanswered 
      `}
      </strong>
      <div style={{ marginTop: '16px'}}>
        <Button
          variant='contained'
          onClick={() => reset()}
        >
          Reset Game
        </Button> 
      </div>
    </footer>
  )
}

