import React, { useEffect, useState, useCallback } from "react"

const JsonApiRequest = () => {
  const [authors, setAuthors] = useState(null)

  useEffect(() => {
    fetch("http://jsonapiplayground.reyesoft.com/v2/authors?include=books&sort=name", {
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json"
    }
    })
    .then(response => response.json())
    .then(data => setAuthors(data))
  }, [])

  const getBookTitle = useCallback((bookId) => {
    const bookData = authors?.included.find(({ id }) => id === bookId);
    return bookData?.attributes?.title
  }, [authors])

  if (authors === null) {
    return null
  }

  return (
    authors.data?.map(({ id, attributes, relationships }) => {
      const { name, birthPlace} = attributes;
      return (
        <div key={id}>
          <p>{name}, {birthPlace}</p>
          <ul>
            {relationships.books.data.map(({ id }) => <li key={id}>{getBookTitle(id)}</li>)}
          </ul>
        </div>
      )
    }
  ))
}

export default JsonApiRequest;
