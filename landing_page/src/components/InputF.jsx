import { Input } from '@chakra-ui/react'

const InputF = ({title,stackholder}) => {
  return (
    <div >
      <p className=' text-gray-2'>{title}</p>
      <Input placeholder={stackholder} size='lg' className=' px-4'/>
    </div>
  )
}

export default InputF