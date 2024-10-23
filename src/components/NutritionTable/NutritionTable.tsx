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
  <div className="w-full mb-4">
    <table className="w-full">
      <tbody>
        <tr className="border-b">
          <td className="py-2 font-semibold">{nutrition.calories}</td>
          <td className="py-2">{nutrition.caloriesValue}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 font-semibold">{nutrition.protein}</td>
          <td className="py-2">{nutrition.proteinValue}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 font-semibold">{nutrition.fat}</td>
          <td className="py-2">{nutrition.fatValue}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 font-semibold">{nutrition.carbohydrates}</td>
          <td className="py-2">{nutrition.carbohydratesValue}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 font-semibold">{nutrition.fiber}</td>
          <td className="py-2">{nutrition.fiberValue}</td>
        </tr>
      </tbody>
    </table>
  </div>
);
