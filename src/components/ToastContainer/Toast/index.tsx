import React, { useEffect } from 'react'
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../../hooks/toast'

import { Container } from './styles'

interface ToastProps {
    toast: ToastMessage;
    style: object;
}

const icons = {
    info: <FiInfo size={24} />,
    success: <FiCheckCircle size={24} />,
    error: <FiAlertCircle size={24} />
}

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
    const { removeToast } = useToast()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [toast.id, removeToast])

    return (
        <Container
            type={toast.type}
            hasDescription={!!toast.description}
            style={style}>
            { icons && icons[toast.type!] }
            <div>
                <strong>{toast.title}</strong>
                {toast.description && <p>{toast.description}</p>}
            </div>

            <button type="button" onClick={() => removeToast(toast.id)}>
                <FiXCircle size={18} />
            </button>
        </Container>
    )
}

export default Toast
