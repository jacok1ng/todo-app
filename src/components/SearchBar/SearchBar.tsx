import { Button } from 'components'
import { AddIcon, SearchIcon } from 'icons'

interface SearchBarProps {
  onAdd: () => void
}

const SearchBar = ({ onAdd }: SearchBarProps) => {
  return (
    <div className="flex w-full justify-start ">
      <input placeholder="Wyszukaj po nazwie..." className="mr-3 w-8/12" />
      <div className="flex w-4/12 space-x-1">
        <Button className="h-[36px] bg-green-600" onClick={onAdd}>
          Dodaj <AddIcon style={{ fontSize: 17 }} />
        </Button>
        <Button className="h-[36px]">
          Szukaj <SearchIcon />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
