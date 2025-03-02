import ErrorPage from "../components/ErrorPage";

export const metadata = {
  title: "Page not found"
}

export default function Error() {
  return <ErrorPage status={404} />;
}
