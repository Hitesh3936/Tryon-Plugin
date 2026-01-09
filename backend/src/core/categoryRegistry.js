export const CATEGORY_REGISTRY = Object.freeze({
  UPPER_BODY: {
    id: "upper_body",
    description: "Shirts, T-shirts, kurtas, jackets",
    rules: { preserve: ["face","skin","pose","background"], replace: ["upper_clothing"] }
  },
  LOWER_BODY: {
    id: "lower_body",
    description: "Jeans, trousers, skirts",
    rules: { preserve: ["torso","face","background"], replace: ["lower_clothing"] }
  },
  FULL_BODY: {
    id: "full_body",
    description: "Dresses, sarees, gowns",
    rules: { preserve: ["face","background"], replace: ["entire_outfit"] }
  },
  ACCESSORY: {
    id: "accessory",
    description: "Watches, glasses, bags",
    rules: { preserve: ["body","face"], replace: ["accessory"] }
  },
  FOOTWEAR: {
    id: "footwear",
    description: "Shoes, sneakers",
    rules: { preserve: ["legs","pose"], replace: ["footwear"] }
  },
  COSMETICS: {
    id: "cosmetics",
    description: "Makeup products",
    rules: { preserve: ["identity","expression"], replace: ["cosmetic"] }
  }
});