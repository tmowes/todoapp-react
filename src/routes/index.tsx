import { Route, Routes } from 'react-router-dom'

import * as P from '../pages'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<P.TodoApp />} />
    <Route path="/shop" element={<P.Home />} />
    <Route path="/dashboard" element={<P.Dashboard />} />
    <Route path="*" element={<P.PageNotFound />} />
  </Routes>
)

export default Router
