import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelsPromise, cartModels, setCartModels }) => {
  const models = use(modelsPromise);
  // console.log(models)
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-4xl text-zinc-800 font-semibold">
          Choose Your AI Model
        </h2>
        <p className="text-lg text-zinc-700 font-medium mt-2 ">
          One subscription gives you access to all frontier ai models
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            cartModels={cartModels}
            setCartModels={setCartModels}
          />
        ))}
      </div>
    </>
  );
};

export default Models;
