import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});


const Question4 = () => {

  const [response, setResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => consumeApi(1), [])

  async function consumeApi(page) {
    let param = `?page=${page}&results=5&seed=foobar`;
    let res = await api.get(param)

    if (res.status === 200) setResponse(res.data.results)
    else setResponse([])
  }

  const nextPage = page => {
    const next = page + 5;
    setCurrentPage(next);

    consumeApi(next);
  }

  const previousPage = page => {
    if (page === 1) {
      alert("Already on the first page");
    } else {
      const previous = page - 5;
      setCurrentPage(previous);

      consumeApi(previous);
    }
  }

  const Person = () => {

    return (
      <>
        <div>
          <div>
            {<button onClick={() => previousPage(currentPage)}>PREVIOUS</button>}
          </div>
          <br />
          <div>{response.map(r =>
            <div>
              <img src={r.picture.thumbnail} alt=""></img>
              <p>{r.name.title + " " + r.name.first + " " + r.name.last}</p>
            </div>
          )}
          </div>
          <div>
            {<button onClick={() => nextPage(currentPage)}>NEXT</button>}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <h1>Question 4</h1>
      <p>Create a component that makes an <u>external HTTP Request </u>to fetch user data as soon as it loads. Then iterate through
				the fetched data and display the picture thumbanail and full name of the person.
				Lastly, create a simple pagination with a previous and next buttons to fetch different pages of data. For this exercise, take these into account:
			</p>
      <ul>
        <li>The url to get the data is: https://randomuser.me/api/?page=X&results=Y&seed=foobar</li>
        <li>The <i>results</i> parameter indicates the number of items you want to return;</li>
        <li>The <i>page</i> parameter indicates the page you want to return;</li>
        <li>The <i>seed</i> parameter is to always return the same results (don't need to touch this parameter);</li>
        <li>The first page should be 1;</li>
        <li>There's an unlimited number of pages (don't worry about the total number of items);</li>
        <li>Each page should return 5 items.</li>
      </ul>
      {
        <Person />
      }
    </>
  )
}

export default Question4