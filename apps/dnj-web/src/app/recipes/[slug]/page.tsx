export default function RecipeEntry({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Recipe Entry - {params.slug}</h1>
      <p>This is the recipe entry for {params.slug}.</p>
    </div>
  );
}
