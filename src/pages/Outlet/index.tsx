import { HomePage } from "../HomePage"
import { SearchPage } from "../SearchPage"
import { Page404 } from "../Page404"

export const Outlet = () => (
  <>
    <HomePage/>
    <SearchPage/>
    <Page404/>
  </>
)