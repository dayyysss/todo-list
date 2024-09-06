import { toast } from 'react-hot-toast'

export const showSuccessToast = (message) => {
  toast.success(message, {
    icon: '✔️',
  })
}

export const showErrorToast = (message) => {
  toast.error(message, {
    icon: '❌',
  })
}
