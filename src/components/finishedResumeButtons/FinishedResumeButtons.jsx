import React from 'react'
import { Button } from 'antd'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Link } from 'react-router-dom'
const FinishedResumeButtons = ({ document }) => {
    return (
        <div style={{ marginBottom: 20, width: 700, maxWidth: '100%',display: 'flex', justifyContent: "center", alignItems: 'center', gap: 30 }}>
            <Link to={'/form'}>
                <Button type='primary' >Change CV</Button>
            </Link>
            <Link to={'/'} onClick={() => sessionStorage.removeItem("cvData")}>
                <Button type='primary'>Home</Button>
            </Link>
        </div>
    )
}

export default FinishedResumeButtons