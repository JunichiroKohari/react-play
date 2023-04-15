import { useParams, useLocation } from "react-router-dom"

export const UrlParameter = () => {
  const { id } = useParams()
  const { search } = useLocation()
  const query = new URLSearchParams(search)

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>parameter is {id}</p>
      <p>query parameter is {query.get("name")}</p>
    </div>
  )
}