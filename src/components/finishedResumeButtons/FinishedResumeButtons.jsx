import React from 'react'
import { Button } from 'antd'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const FinishedResumeButtons = () => {
    const { t } = useTranslation()
    return (
        <div style={{ marginBottom: 20, width: '100%', display: 'flex', justifyContent: "center", alignItems: 'center', gap: 30 }}>
            <Link to={'/form'} onClick={() => sessionStorage.removeItem("cvData")}>
                <Button type='primary'>{t('result.editBtn')}</Button>
            </Link>
            <Link to={'/'} onClick={() => sessionStorage.removeItem("cvData")}>
                <Button type='primary'>{t('result.homeBtn')}</Button>
            </Link>
        </div>
    )
}

export default FinishedResumeButtons