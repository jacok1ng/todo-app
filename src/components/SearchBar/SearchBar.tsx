import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { Button } from 'components'
import { AddIcon } from 'icons'

interface SearchBarProps {
  onAdd: () => void
  setSearchName: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ onAdd, setSearchName }: SearchBarProps) => {
  const [name, setName] = useState('')

  useEffect(() => {
    const debounce = setTimeout(() => setSearchName(name), 1000)

    return () => clearTimeout(debounce)
  }, [name, setSearchName])

  return (
    <div className="flex w-full justify-start ">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Wyszukaj po nazwie..."
        className="mr-3 w-10/12 rounded border-2 border-slate-400 px-2"
      />
      <div className="flex w-2/12 space-x-1">
        <Button className="h-[36px] bg-green-600" onClick={onAdd}>
          Dodaj <AddIcon style={{ fontSize: 17 }} />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
