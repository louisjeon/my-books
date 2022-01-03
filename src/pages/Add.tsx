import { Redirect } from "react-router-dom";
import AddContainer from "../containers/AddContainer";
import useToken from "../Hooks/useToken";

export default function Add() {
  const token = useToken();

  if (token === null) {
    return <Redirect to="/signin" />;
  }

  return <AddContainer />;
}
