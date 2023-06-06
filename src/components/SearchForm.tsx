import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'


interface IProps {
	onSubmit: (queryInput: string) => void
}

const SearchForm: React.FC<IProps> = ({ onSubmit }) => {
	const [queryInput, setQueryInput] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)


	const handleSubmit = (e: React.FormEvent) => {
		// stop form from submitting
		e.preventDefault()

		if (!queryInput.trim().length) {
			return
		}

		// skickar tillbaks till föräldern den queryn som ska göras till API:t
		onSubmit(queryInput)

		// clear newTodoTitle state
		setQueryInput("")
	}

	// On component mount, focus on search field
	useEffect(() => {
		inputRef.current?.focus()
	}, [handleSubmit])

	return (
		<form id='SearchForm' onSubmit={handleSubmit} className="mb-3">
			<div className="input-group">
				<input
					ref={inputRef}
					type="text"
					className="form-control"
					placeholder="Todo title"
					onChange={e => setQueryInput(e.target.value)}
					value={queryInput}
				/>

				<button
					disabled={!queryInput.trim()}
					type="submit"
					className="btn btn-success"
				>
					Search
				</button>
			</div>
		</form>
	)
}

export default SearchForm
