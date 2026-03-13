import { cn } from '../lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={cn('mb-12', centered && 'mx-auto text-center', className)}>
      <span className={cn('section-label', centered && 'justify-center')}>{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      <p className={cn('section-copy mt-4', centered && 'mx-auto')}>{description}</p>
    </div>
  )
}
