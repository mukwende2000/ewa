import Container from "../../components/Container";
import MovieCategory from "./components/MovieCategory";

import { categories } from "../../data";

function index() {
  return (
    <Container>
      <div className="text-white">
        {categories.map((category, index) => {
          return (
            <MovieCategory
              key={category.id}
              isTvSeries={index > 2}
              endPoint={category.request}
              categoryName={category.categoryName}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default index;
