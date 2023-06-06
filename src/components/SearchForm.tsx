import React, { useEffect, useRef, useState } from 'react'

interface IProps {
	// onAddTodo: (todo: Todo) => void <-----detta är gammal kod

	// skicka in namn på hämtningsfunktion här:
	// onSubmit: (queryInput) => void
}

const SearchForm: React.FC<IProps> = ({ /* onSubmit */ }) => {
	const [queryInput, setQueryInput] = useState("")
	const inputRef = useRef<HTMLInputElement>(null)

	const handleSubmit = (e: React.FormEvent) => {
		// stop form from submitting
		e.preventDefault()

		if (!queryInput.trim().length) {
			return
		}

		// här ska vi söka på input (e.target.value)

		// hur göra med loading då det är en state i FilmsPage? Ska search ha sin egen loading och rendera <Loading/> componenten?
		// nej. söket till APIt ska göras ute i films, jag bara kallar på sök-funktionen här inne.

		// clear newTodoTitle state
		setQueryInput("")
	}

	// On component mount, focus on search field
	useEffect(() => {
		inputRef.current?.focus()
	}, [])

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
