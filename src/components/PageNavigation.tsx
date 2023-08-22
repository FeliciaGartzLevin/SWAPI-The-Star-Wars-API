import React from 'react'
import { Button } from 'react-bootstrap'

type IProps = {
	currentPage: number
	maxPage: number
	pageSwitcher: (directionNumber: number) => void
}

const PageNavigation: React.FC<IProps> = ({ currentPage, maxPage, pageSwitcher }) => {
	return (
		<div id='PageNavigation' className="d-flex justify-content-between align-items-center my-2 mt-4 ">
			<div className="prev">
				<Button
					disabled={currentPage == 1}
					onClick={() => pageSwitcher(-1)}
				>
					&laquo; Previous
				</Button>
			</div>

			<div className="page">Page {currentPage}/{maxPage}</div>

			<div className="next">
				<Button
					disabled={currentPage >= maxPage}
					onClick={() => pageSwitcher(+1)}
					variant='primary'
				>
					Next &raquo;
				</Button>
			</div>
		</div>
	)
}

export default PageNavigation
