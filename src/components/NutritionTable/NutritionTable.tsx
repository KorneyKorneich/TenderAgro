type Nutrition = {
  calories: string;
  protein: string;
  fat: string;
  carbohydrates: string;
  fiber: string;
  caloriesValue: string;
  proteinValue: string;
  fatValue: string;
  carbohydratesValue: string;
  fiberValue: string;
};

export const NutritionTable = ({ nutrition }: { nutrition: Nutrition }) => (
  <table className="table-auto border-collapse w-full mb-4">
    <thead>
      <tr>
        <th className="border px-4 py-2">{nutrition.calories}</th>
        <th className="border px-4 py-2">{nutrition.protein}</th>
        <th className="border px-4 py-2">{nutrition.fat}</th>
        <th className="border px-4 py-2">{nutrition.carbohydrates}</th>
        <th className="border px-4 py-2">{nutrition.fiber}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border px-4 py-2">{nutrition.caloriesValue}</td>
        <td className="border px-4 py-2">{nutrition.proteinValue}</td>
        <td className="border px-4 py-2">{nutrition.fatValue}</td>
        <td className="border px-4 py-2">{nutrition.carbohydratesValue}</td>
        <td className="border px-4 py-2">{nutrition.fiberValue}</td>
      </tr>
    </tbody>
  </table>
);

