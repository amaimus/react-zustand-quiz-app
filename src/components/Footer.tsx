import { useQuestionsData } from '../hook/useQuestionsData'

export function Footer () {
  const { correct, incorrect, unanswered } = useQuestionsData()
  
  return (
    <footer style={{marginTop: '16px'}}>
      <strong>{`
      ✅ ${correct} correct - 
      ❌ ${incorrect} incorrect - 
      ❓ ${unanswered} unanswered 
      `}
      </strong>
    </footer>
  )
}

