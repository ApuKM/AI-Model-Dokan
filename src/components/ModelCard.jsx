import React, { useState } from "react";

const ModelCard = ({ model, cartModels, setCartModels }) => {
  const [subscribe, setSubscribe] = useState(false);
  const handleSubscription = () => {
    setSubscribe(true);
    setCartModels([...cartModels, model])
  };
  return (
    <>
        <div className="relative">
          <div className="card bg-base-100 shadow-sm">
            <figure className="bg-zinc-200 py-4 group">
              <img
                className="w-40 h-40 object-contain object-center group-hover:scale-110 transition-all duration-500 "
                src={model.image}
                alt={model.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl text-zinc-700">
                {model.title}
              </h2>
              <p className="text-zinc-600">{model.description}</p>
              <div className="card-actions pt-4">
                <button
                  className="btn btn-soft btn-info w-full"
                  onClick={handleSubscription}
                >
                  {subscribe ? "Subscribed" : "Subscribe now"}
                </button>
              </div>
            </div>
          </div>
          <h4 className="absolute top-0 right-0 bg-info text-sm px-2 py-1 rounded-bl-xl text-zinc-700 font-medium">
            {model.status}
          </h4>
        </div>
    </>
  );
};

export default ModelCard;
