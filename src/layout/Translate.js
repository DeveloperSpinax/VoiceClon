import React from 'react'
import NavbarDashboard from '../components/navbar/NavbarDashboard'
import TranslatedVideo from '../components/translator/TranslatedVideo'
import { Box } from '@mui/material'

const Translate = () => {
    const [parentLang, setParentLang] = React.useState('ENG')
  return (
    <Box sx={{
      height: '100vh',
      overflowY: 'hidden',
    }}>
        <NavbarDashboard setParentLang={setParentLang} translate="translate" />
        <TranslatedVideo />
    </Box>
  )
}

export default Translate