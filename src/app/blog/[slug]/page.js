export async function generateMetadata({ params }) {
  return {
    title: `${params.slug} | CrossCurrencyFX`,
    description: "Forex blog article",
  }
}

export default function BlogPost({ params }) {
  return <h1>hi</h1>
}
