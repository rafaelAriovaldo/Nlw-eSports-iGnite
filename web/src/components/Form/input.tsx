import{InputHTMLAttributes} from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {}


export function Input(props: inputProps) {

    return (
        <input
            {...props}
            className='bg-zinc-900 py-2 px-3 rounded text-sm placeholder:text-zinc-500'
             />
    )
}