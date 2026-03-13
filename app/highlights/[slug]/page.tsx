import { highlights, getHighlightBySlug } from '../../data/highlights'
import HighlightDetail from '../../components/HighlightDetail'

export function generateStaticParams() {
  return highlights.map((h) => ({ slug: h.slug }))
}

export default async function HighlightPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const highlight = getHighlightBySlug(slug)

  return <HighlightDetail highlight={highlight} />
}
