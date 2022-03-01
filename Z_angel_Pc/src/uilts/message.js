import { ElMessage } from 'element-plus'

const Message = (msg, type) => {
  return ElMessage({
    message: msg,
    type
  })
}

export default Message
