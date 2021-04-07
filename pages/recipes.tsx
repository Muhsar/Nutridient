import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Navbar from "../components/Navbar";
import { FOODLIST } from "../foodList";
const API_URL = "https://forkify-api.herokuapp.com/api";
export default function recipes() {
  const [selected, setSelected] = React.useState<string>("");
  const [getQuery, setQuery] = React.useState<boolean>(false);
  const handleFood = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    setQuery(false);
  };
  const { data } = useQuery(
    "getRecipes",
    async () => await axios.get(`${API_URL}/search?q=${selected}`),
    {
      retry: 2,
      enabled: !!getQuery,
    }
  );
  const recipes = data?.data;
  const getRecipes = (e: any) => {
    e.preventDefault();
    setQuery(true);
  };
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 sm:px-0 py-24 mx-auto">
          <form className="my-5" onSubmit={getRecipes}>
            <select
              name="food"
              id="food"
              onChange={handleFood}
              className="form-control capitalize rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base"
            >
              <option value="">Please Select Food</option>
              {FOODLIST.map((food) => (
                <option value={food.name} className="capitalize">
                  {food.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-3 mt-3 focus:outline-none hover:bg-green-600 rounded text-lg"
              disabled={selected === "" && true}
            >
              Get Recipe
            </button>
          </form>
          {selected && (
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 capitalize">
                  <span className="capitalize">{selected}</span> List
                </h1>
                <div className="h-1 w-20 bg-green-500 rounded" />
                {recipes && (
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    {recipes.count} Recipes Found
                  </h3>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-wrap -m-4">
            {recipes &&
              recipes.recipes.map((recipe: any) => (
                <div
                  className="xl:w-1/3 w-full md:w-1/2 p-4 cursor-pointer"
                  key={recipe.recipe_id}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="linear"
                >
                  <Link href={`/${selected}/${recipe.recipe_id}`}>
                    <div className="bg-gray-100 rounded-lg">
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-3"
                        src={recipe.image_url}
                        alt="content"
                      />
                      <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                        Category: {selected}
                      </h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {recipe.title}
                      </h2>
                      <p className="leading-relaxed text-base px-1">
                        Publisher: {recipe.publisher}
                      </p>
                      <p className="leading-relaxed text-base px-1">
                        Social-rank: {recipe.social_rank}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
