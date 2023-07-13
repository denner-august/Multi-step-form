import Image from 'next/image'

interface imageProps{
 imagem:string,
 height:number,
 width:number,
 alt:string
}
 
export function ImageComponent({imagem, height, width, alt}:imageProps) {
  return (
    <Image
      src={imagem}
      width={width}
      height={height}
      alt={alt}
    />
  )
}