import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Input } from "@material-tailwind/react";

interface IProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

const SearchBar = (props: IProps) => {
    return (
        <div className="max-w-96 w-full relative">
            <MagnifyingGlassIcon 
                className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-blue-gray-300"
            />
            <Input 
                type="text"
                size="md"
                {...props}
                className="w-full !border-t-blue-gray-200 focus:!border-t-gray-900 pl-10"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
        </div>
    )
}

export default SearchBar