import{InputHTMLAttributes} from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}


export function Input(props: inputProps) {

    return (
        <input
            {...props}
            className='bg-zinc-900 py-1 px-2 rounded text-sm placeholder:text-zinc-500'
             />
    )
}