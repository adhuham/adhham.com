import Image from 'next/image'

interface PostFeaturedImageProps {
  src: string
  alt: string
  variant: 'writing' | 'dhivehi'
}

export function PostFeaturedImage({ src, alt, variant }: PostFeaturedImageProps) {
  const className =
    variant === 'writing' ? 'writing-featured-image' : 'dhivehi-featured-image'

  return (
    <div className={className}>
      <Image src={src} alt={alt} width={1200} height={630} className={`${className}-img`} />
    </div>
  )
}
