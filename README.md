# React-router-dom 6 example

## 기존 형태와 비슷하게 하려면

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
```

BrowserRouter로 감싼 다음 Routes에 Route들을 정의해주면 된다.

## createBrowserRouter를 사용하면?

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
```

라우터의 형태가 위처럼 바뀐다. 그리고 App에 Header와 Outlet을 넣어준다.

```js
function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
```

Outlet은 자식 엘리멘트를 대체하게 된다.

```jsx
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

렌더링은 RouterProvider에 router를 전달해주면 된다.

## errorElement

errorElement 속성을 통해서 에러시(매칭되는 url이 없거나 렌더링 될 element가 에러가 있을 때) 보여줄 수 있는 컴포넌트를 전달할 수 있다.

```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
```

NotFound 컴포넌트는 매칭되는 컴포넌트가 없을 시 보여줄 것이고, Error 컴포넌트는 Home 컴포넌트에 에러가 있어서 렌더링 되지 않을 때 대신 렌더링 될 것이다.
