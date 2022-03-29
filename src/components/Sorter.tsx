import {FC} from 'react'


type Props = {
  selectedSort: string,
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>,
  selectedSortDirection: boolean,
  setSelectedSortDirection: React.Dispatch<React.SetStateAction<boolean>>
}

const Sorter: FC<Props> = ({
  selectedSort,
  setSelectedSort,
  selectedSortDirection,
  setSelectedSortDirection}) => {

  function handlerSelectSort(sort: string) : void {
    setSelectedSort(sort)
    setSelectedSortDirection(!selectedSortDirection)
  }

  return (
    <div className="sorters">
      <span
        className={
          (selectedSort !== 'fio') ? '' :
          (selectedSortDirection) ? 'active-sorter desc-filter' : 'active-sorter asc-sorter' 
        }
        onClick={() => handlerSelectSort('fio')}>
        FIO
      </span>
      <span
        className={
          (selectedSort !== 'cityId') ? '' :
          (selectedSortDirection) ? 'active-sorter desc-sorter' : 'active-sorter asc-sorter' 
        }
        onClick={() => handlerSelectSort('cityId')}>
        CITY
      </span>
    </div>
  )
}

export default Sorter