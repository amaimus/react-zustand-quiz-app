import { Container, Stack, Typography } from '@mui/material';
import './App.css';
import { JavascriptLogo } from './components/JavascriptLogo';
import { Start } from './components/Start';

function App() {

  return (
    <Container maxWidth='sm'>
      <Stack direction='row' gap='2' alignItems='center' justifyContent='center'>
        <JavascriptLogo />
        <Typography variant='h2' component='h1'>
          Quiz app
        </Typography>
        <Start />
      </Stack>
    </Container>
  )
}

export default App
