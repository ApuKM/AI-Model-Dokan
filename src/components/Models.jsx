import React, { use } from "react";

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  // console.log(models)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
      {models.map((model) => (
        <div>
          <div className="card bg-base-100 shadow-sm">
            <figure className="bg-zinc-200 py-4 group">
              <img
              className="w-40 h-40 object-contain object-center group-hover:scale-110 transition-all duration-500 "
                src={model.image}
                alt={model.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-zinc-700">{model.title}</h2>
              <p className="text-zinc-600">
                {model.description}
              </p>
              <div className="card-actions pt-4">
                <button className="btn btn-soft btn-info w-full">Subscribe now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Models;
