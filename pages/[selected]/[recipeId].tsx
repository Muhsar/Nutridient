import axios from "axios";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

export const getServerSideProps = (context: {
  query: { selected: any; recipeId: any };
}) => {
  const { recipeId, selected } = context.query;

  return { props: { recipeId, selected } };
};

const API_URL = "https://forkify-api.herokuapp.com/api";
export default function RecipeId({
  recipeId,
  selected,
}: {
  recipeId: any;
  selected: any;
}) {
  const { data } = useQuery(
    "getRecipe",
    async () => await axios.get(`${API_URL}/get?rId=${recipeId}`),
    {
      retry: 2,
      enabled: !!recipeId,
    }
  );
  const recipe = data?.data?.recipe;
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {recipe && (
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="foodImage"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={recipe.image_url}
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-easing="linear"
            />
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              data-aos="fade-up-left"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h2 className="text-sm title-font text-gray-500 tracking-widest pb-3">
                Category: <span className="capitalize">{selected}</span>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 pb-3">
                {recipe.title}
              </h1>
              {recipe.ingredients.map((ingredient: any) => (
                <p className="leading-relaxed">
                  <span className="ml-3">{ingredient}.</span>
                </p>
              ))}
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex"></div>
              </div>
              <div className="flex">
                <Link href="/recipes">
                  <button className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                    Back to Recipes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
