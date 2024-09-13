import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../features/product/productSlice";
import { useEffect } from "react";

export default function withLoader(Component) {
  return (props) => {
    const { loading, error, products } = useSelector((store) => store.product);

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      dispatch(getProducts(searchParams));
    }, [searchParams]);

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <Component
        {...props}
        data={products}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    );
  };
}
