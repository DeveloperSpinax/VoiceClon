import React from 'react'
import NavbarDashboard from '../components/navbar/NavbarDashboard'
import UploadVideoFirst from '../components/upload/UploadVideoFirst'

const Dashboard = () => {
  const [parentLang, setParentLang] = React.useState('ENG')
  return (
    <React.Fragment>
        <NavbarDashboard setParentLang={setParentLang}  />
        <UploadVideoFirst lang={parentLang} />
    </React.Fragment>
  )
}

export default Dashboard