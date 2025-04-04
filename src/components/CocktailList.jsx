import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktails found</h4>;
  }

  const formattedDrink = drinks.map(
    ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    }
  );
  return (
    <Wrapper>
      {formattedDrink.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
