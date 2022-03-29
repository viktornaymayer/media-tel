import { FC } from "react"

type Props = {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  countOfPages: number
}

const Pagination: FC<Props> = ({currentPage, setCurrentPage, countOfPages}) => {

  function prevPage(){ setCurrentPage(currentPage - 1)}
  function nextPage(){ setCurrentPage(currentPage + 1)}

  return (
    <div className="pagination">
      <button
        className={currentPage === 1 ? 'btn btn-disabled' : 'btn'}
        onClick={prevPage}
        >
        &lt;
      </button>
      <button
        className={currentPage === countOfPages ? 'btn btn-disabled' : 'btn'}
        onClick={nextPage}
        >
        &gt;
      </button>
    </div>
  )
}

export default Pagination
