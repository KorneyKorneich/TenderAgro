export type NutrientElement = {
  name: string;
  amount: string;
};

export const ElementsList = ({ elements }: { elements: NutrientElement[] }) => (
  <ul className="list-disc pl-5">
    {elements.map((element, index) => (
      <li key={index} className="mb-1">
        {element.name}: {element.amount}
      </li>
    ))}
  </ul>
);

